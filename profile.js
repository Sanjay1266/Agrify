document.addEventListener("DOMContentLoaded", async function () {
    const userIcon = document.getElementById("user-icon");
    if (!userIcon) {
        console.error("User icon element not found!");
        return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
        window.location.href = "login.html"; 
        return;
    }

    try {
        const response = await fetch("http://localhost:3001/profile", {
            method: "GET",
            headers: { "Authorization": `Bearer ${token}` }
        });

        const user = await response.json();
        if (response.ok) {
            document.getElementById("name").textContent = user.name;
            document.getElementById("username").textContent = user.username;

            // ✅ Replace FontAwesome icon with default user image
            userIcon.outerHTML = `<img id="user-icon" src="${user.icon || 'assets/images/default-user.png'}" 
                alt="User Profile" width="40px" height="40px" style="border-radius: 50%;">`;

        } else {
            alert(user.error);
            localStorage.removeItem("token"); 
            window.location.href = "login.html";
        }
    } catch (error) {
        console.error("Error fetching profile:", error);
        alert("An error occurred. Please try again.");
        localStorage.removeItem("token"); 
        window.location.href = "login.html";
    }
});
document.getElementById("logout").addEventListener("click", function () {
    // Clear local storage
    localStorage.clear();

    // ✅ Redirect to login page
    window.location.href = "index.html";
});
;
