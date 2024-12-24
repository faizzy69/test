// Sample Products
const products = [
    { id: 1, name: "Hoodie", category: "clothing", image: "assets/shoe1.jpg", price: 50 },
    { id: 2, name: "Joggers", category: "clothing", image: "assets/shoe2.jpg", price: 40 },
    { id: 3, name: "Shirt", category: "clothing", image: "assets/shirt.jpg", price: 30 },
];

// Load Products
function loadProducts(productsToShow) {
    const productsSection = document.getElementById("products");
    productsSection.innerHTML = productsToShow
        .map(
            (product) => `
        <div class="product">
            <img src="${product.image}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `
        )
        .join("");
}

// Filter Products by Category
function filterCategory(category) {
    if (category === "new") {
        alert("New products coming soon!");
        return;
    }
    const filteredProducts = products.filter((p) => p.category === category);
    loadProducts(filteredProducts);
}

// Search Products
function searchProducts() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filteredProducts = products.filter((p) =>
        p.name.toLowerCase().includes(query)
    );
    loadProducts(filteredProducts);
}

// Add to Cart
function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product is already in the cart
    const existingItem = cart.find((item) => item.id === productId);
    if (existingItem) {
        alert("This item is already in your cart.");
        return;
    }

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(`Product ${product.name} added to the cart!`);
}

// Update Cart Count
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCountElement = document.getElementById("cartCount");

    if (cartCountElement) {
        cartCountElement.innerHTML = `
            <img src="assets/shopping-cart.png" alt="Cart Icon" class="cart-icon" onclick="redirectToCart()" />
            Cart: ${cart.length}
        `;
    }
}

// Show Cart Items on Cart Page
function showCartItems() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItems = document.getElementById("cartItems");

    // Clear previous cart items
    cartItems.innerHTML = "";

    // Add cart items to the cart page
    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach((item) => {
            cartItems.innerHTML += `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" />
                    <p>${item.name}</p>
                    <p>Price: $${item.price}</p>
                </div>
            `;
        });
    }
}

// Go to Checkout Page
function goToCheckout() {
    window.location.href = "/asset/payment/payment.html"; // Redirect to checkout page
}

// Initial Load
window.onload = function () {
    loadProducts(products);
    updateCartCount();

    // Show cart items if on the cart page
    if (window.location.pathname.endsWith("cart.html")) {
        showCartItems();
    }
};

// Toggle Sidebar (for categories)
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
    } else {
        sidebar.style.left = "0px";
    }
}

// Clear Search Input (Bonus: Adding clear search functionality)
function clearSearch() {
    document.getElementById("searchInput").value = '';
    loadProducts(products); // Reset the product list
}

function redirectToCart() {
    window.location.href = "cart.html"; // Redirect to the cart page
}