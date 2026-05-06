document.addEventListener('DOMContentLoaded', function() {
    // Sample cart items - in a real app, this would come from your shopping cart
    const cartItems = [
        { id: 1, name: "Roundup Herbicide", company: "Monsato", price: 149, quantity: 1, image: "assets/images/roundup.avif" },
        { id: 2, name: "Glycel Herbicide", company: "Sumitomo", price: 288, quantity: 2, image: "assets/images/glycel.avif" }
    ];
    
    // Payment method toggle
    const paymentMethods = document.querySelectorAll('input[name="payment"]');
    const paymentDetails = document.querySelectorAll('.payment-details');
    
    paymentMethods.forEach(method => {
        method.addEventListener('change', function() {
            paymentDetails.forEach(detail => {
                detail.style.display = 'none';
            });
            
            const selectedDetail = document.getElementById(`${this.value}-details`);
            if (selectedDetail) {
                selectedDetail.style.display = 'block';
            }
        });
    });
    
    // Initialize cart display
    displayCartItems(cartItems);
    updateOrderSummary(cartItems);
    
    // Coupon code application
    document.getElementById('apply-coupon').addEventListener('click', applyCoupon);
    
    // Form submission
    document.getElementById('shipping-form').addEventListener('submit', function(e) {
        e.preventDefault();
        processOrder();
    });
    
    function displayCartItems(items) {
        const summaryItems = document.getElementById('summary-items');
        summaryItems.innerHTML = '';
        
        if (items.length === 0) {
            summaryItems.innerHTML = '<p>Your cart is empty</p>';
            return;
        }
        
        items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'summary-item';
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <h4>${item.name}</h4>
                    <p>${item.company}</p>
                    <p>Qty: ${item.quantity}</p>
                </div>
                <div class="item-price">₹${(item.price * item.quantity).toFixed(2)}</div>
            `;
            summaryItems.appendChild(itemElement);
        });
    }
    
    function updateOrderSummary(items) {
        const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = 50; // Fixed shipping cost
        const tax = subtotal * 0.05; // 5% tax
        const total = subtotal + shipping + tax;
        
        document.getElementById('subtotal').textContent = `₹${subtotal.toFixed(2)}`;
        document.getElementById('shipping').textContent = `₹${shipping.toFixed(2)}`;
        document.getElementById('tax').textContent = `₹${tax.toFixed(2)}`;
        document.getElementById('total').textContent = `₹${total.toFixed(2)}`;
    }
    
    function applyCoupon() {
        const couponCode = document.getElementById('coupon-code').value;
        const couponMessage = document.getElementById('coupon-message');
        
        // Simple coupon validation - in a real app, this would check against a database
        if (couponCode === 'AGRIFY10') {
            couponMessage.textContent = '10% discount applied!';
            couponMessage.style.color = '#28a745';
            
            // Apply discount to total
            const currentTotal = parseFloat(document.getElementById('total').textContent.replace('₹', ''));
            const discountedTotal = currentTotal * 0.9;
            document.getElementById('total').textContent = `₹${discountedTotal.toFixed(2)}`;
        } else if (couponCode) {
            couponMessage.textContent = 'Invalid coupon code';
            couponMessage.style.color = '#dc3545';
        } else {
            couponMessage.textContent = 'Please enter a coupon code';
            couponMessage.style.color = '#dc3545';
        }
    }
    
    function processOrder() {
        // In a real application, this would send the order to your backend
        const formData = new FormData(document.getElementById('shipping-form'));
        const orderData = {
            shipping: Object.fromEntries(formData),
            items: cartItems,
            total: document.getElementById('total').textContent
        };
        
        console.log('Order submitted:', orderData);
        
        // Show success message (in a real app, you'd redirect to a confirmation page)
        alert('Order placed successfully! Thank you for your purchase.');
        
        // Redirect to home page after order
        window.location.href = 'index.html';
    }
});