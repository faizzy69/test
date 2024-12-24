// Fetch the cart from localStorage (or session storage) and display it
window.onload = function () {
    const checkoutItems = document.getElementById("checkoutItems");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the cart is empty
    if (cart.length === 0) {
        checkoutItems.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            checkoutItems.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" />
                <div class="cart-item-details">
                    <p><strong>${item.name}</strong></p>
                    <p>Price: $${item.price.toFixed(2)}</p>
                    <p>Quantity: ${item.quantity}</p>
                </div>
            </div>
            `;
        });
    }

    // Handle form submission for payment
    document.getElementById("paymentForm").onsubmit = function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        alert("Payment Successful! Your order will be processed shortly.");
        
        // Clear the cart after payment
        localStorage.removeItem("cart");

        // Redirect to the thank-you page
        window.location.href = "thankyou.html";
    };
};
