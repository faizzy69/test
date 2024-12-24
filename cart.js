// Load Cart Items
function loadCartItems() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartSection = document.getElementById("cartSection");
    const cartTotal = document.getElementById("cartTotal");

    // Clear the cart section
    cartSection.innerHTML = "";

    if (cart.length === 0) {
        cartSection.innerHTML = "<p>Your cart is empty.</p>";
        cartTotal.innerHTML = "";
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        cartSection.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" />
                <p>${item.name}</p>
                <p>Price: $${item.price}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });

    cartTotal.innerHTML = `<h2>Total: $${total}</h2>`;
}

// Remove Item from Cart
function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1); // Remove the item at the specified index
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCartItems(); // Reload the cart
}

// Redirect to Payment Page
function redirectToPayment() {
    window.location.href = "asset/payment/payment.html"; // Redirect to the payment page
}

// Initial Load
window.onload = function () {
    loadCartItems();
};
