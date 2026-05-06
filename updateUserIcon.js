document.addEventListener("DOMContentLoaded", function () {
    const favicon = document.querySelector("link[rel='icon']");

    function updateFavicon(iconPath) {
        if (favicon) {
            favicon.href = iconPath;
        } else {
            const newFavicon = document.createElement("link");
            newFavicon.rel = "icon";
            newFavicon.type = "image/png"; // Ensure correct MIME type
            newFavicon.href = iconPath;
            document.head.appendChild(newFavicon);
        }
    }

    // ✅ Check if user is logged in (by checking token)
    if (localStorage.getItem("token")) {
        updateFavicon("assets/images/default-user.png"); // Change favicon to user icon
    }

    const logoutButton = document.getElementById("logout");

    if (logoutButton) {
        logoutButton.addEventListener("click", function (event) {
            event.preventDefault();

            console.log("Logging out...");

            // ✅ Restore favicon to default
            updateFavicon("assets/images/icon.png");

            // ✅ Clear user data
            localStorage.clear();

            // ✅ Redirect to login page
            window.location.href = "login.html";
        });
    }
});
