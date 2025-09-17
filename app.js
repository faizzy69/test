// Clothify eCommerce Application
class ClothifyApp {
    constructor() {
        this.products = [
            {
                id: 1,
                name: "Classic Cotton T-Shirt",
                price: 29.99,
                category: "men",
                sizes: ["XS", "S", "M", "L", "XL", "XXL"],
                colors: ["Black", "White", "Navy"],
                image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
                description: "Comfortable 100% cotton t-shirt perfect for everyday wear.",
                rating: 4.5
            },
            {
                id: 2,
                name: "Premium Hoodie",
                price: 89.99,
                category: "men",
                sizes: ["S", "M", "L", "XL", "XXL"],
                colors: ["Charcoal", "Navy", "Burgundy"],
                image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
                description: "Ultra-soft fleece hoodie with modern fit.",
                rating: 4.7
            },
            {
                id: 3,
                name: "Slim Fit Jeans",
                price: 79.99,
                category: "men",
                sizes: ["28", "30", "32", "34", "36", "38"],
                colors: ["Dark Blue", "Light Blue", "Black"],
                image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
                description: "Modern slim fit jeans with stretch comfort.",
                rating: 4.3
            },
            {
                id: 4,
                name: "Bomber Jacket",
                price: 149.99,
                category: "men",
                sizes: ["S", "M", "L", "XL"],
                colors: ["Black", "Olive", "Navy"],
                image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
                description: "Stylish bomber jacket with premium materials.",
                rating: 4.6
            },
            {
                id: 5,
                name: "Elegant Midi Dress",
                price: 119.99,
                category: "women",
                sizes: ["XS", "S", "M", "L", "XL"],
                colors: ["Black", "Navy", "Burgundy"],
                image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
                description: "Sophisticated midi dress perfect for any occasion.",
                rating: 4.8
            },
            {
                id: 6,
                name: "Silk Blouse",
                price: 95.99,
                category: "women",
                sizes: ["XS", "S", "M", "L", "XL"],
                colors: ["Ivory", "Blush", "Navy"],
                image: "https://images.unsplash.com/photo-1564257577817-336f249cf1c3?w=400&h=400&fit=crop",
                description: "Luxurious silk blouse with elegant draping.",
                rating: 4.4
            },
            {
                id: 7,
                name: "High-Waisted Jeans",
                price: 89.99,
                category: "women",
                sizes: ["24", "26", "28", "30", "32", "34"],
                colors: ["Dark Blue", "Light Blue", "Black"],
                image: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=400&h=400&fit=crop",
                description: "Flattering high-waisted jeans with vintage appeal.",
                rating: 4.6
            },
            {
                id: 8,
                name: "Cashmere Cardigan",
                price: 199.99,
                category: "women",
                sizes: ["XS", "S", "M", "L", "XL"],
                colors: ["Cream", "Grey", "Camel"],
                image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop",
                description: "Luxurious cashmere cardigan for ultimate comfort.",
                rating: 4.9
            },
            {
                id: 9,
                name: "Canvas Sneakers",
                price: 65.99,
                category: "accessories",
                sizes: ["6", "7", "8", "9", "10", "11", "12"],
                colors: ["White", "Black", "Navy"],
                image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
                description: "Classic canvas sneakers for everyday style.",
                rating: 4.2
            },
            {
                id: 10,
                name: "Leather Crossbody Bag",
                price: 129.99,
                category: "accessories",
                sizes: ["One Size"],
                colors: ["Black", "Brown", "Tan"],
                image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
                description: "Stylish leather crossbody bag with adjustable strap.",
                rating: 4.7
            },
            {
                id: 11,
                name: "Wool Beanie",
                price: 34.99,
                category: "accessories",
                sizes: ["One Size"],
                colors: ["Black", "Grey", "Navy", "Burgundy"],
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
                description: "Warm wool beanie perfect for cold weather.",
                rating: 4.3
            },
            {
                id: 12,
                name: "Minimalist Watch",
                price: 159.99,
                category: "accessories",
                sizes: ["One Size"],
                colors: ["Silver", "Gold", "Black"],
                image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&h=400&fit=crop",
                description: "Elegant minimalist watch with leather strap.",
                rating: 4.5
            }
        ];
        
        this.cart = [];
        this.currentPage = 'home';
        this.currentProduct = null;
        this.filteredProducts = [...this.products];
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadHomePage();
        this.updateCartCount();
    }

    bindEvents() {
        // Navigation - Fixed to handle both direct elements and nested elements
        document.addEventListener('click', (e) => {
            const target = e.target.closest('[data-page]');
            if (target) {
                e.preventDefault();
                const page = target.getAttribute('data-page');
                this.navigateToPage(page);
            }
        });

        // Search functionality - Fixed
        const searchToggle = document.getElementById('searchToggle');
        const searchBar = document.getElementById('searchBar');
        const searchInput = document.getElementById('searchInput');
        
        if (searchToggle && searchBar && searchInput) {
            searchToggle.addEventListener('click', (e) => {
                e.preventDefault();
                searchBar.classList.toggle('hidden');
                if (!searchBar.classList.contains('hidden')) {
                    searchInput.focus();
                }
            });

            searchInput.addEventListener('input', (e) => {
                this.handleSearch(e.target.value);
            });
        }

        // Cart functionality - Fixed
        const cartToggle = document.getElementById('cartToggle');
        if (cartToggle) {
            cartToggle.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleCartSidebar();
            });
        }

        const cartClose = document.getElementById('cartClose');
        if (cartClose) {
            cartClose.addEventListener('click', () => {
                this.closeCartSidebar();
            });
        }

        const continueShopping = document.getElementById('continueShopping');
        if (continueShopping) {
            continueShopping.addEventListener('click', () => {
                this.closeCartSidebar();
            });
        }

        const proceedToCheckout = document.getElementById('proceedToCheckout');
        if (proceedToCheckout) {
            proceedToCheckout.addEventListener('click', () => {
                this.openCheckoutModal();
            });
        }

        // Mobile menu toggle
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        if (mobileMenuToggle) {
            mobileMenuToggle.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }

        // Shop filters and sorting
        const sortSelect = document.getElementById('sortSelect');
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                this.sortProducts(e.target.value);
            });
        }

        const categoryFilters = document.getElementById('categoryFilters');
        if (categoryFilters) {
            categoryFilters.addEventListener('change', () => {
                this.applyFilters();
            });
        }

        const clearFilters = document.getElementById('clearFilters');
        if (clearFilters) {
            clearFilters.addEventListener('click', () => {
                this.clearFilters();
            });
        }

        // Checkout form
        const continueToPayment = document.getElementById('continueToPayment');
        if (continueToPayment) {
            continueToPayment.addEventListener('click', () => {
                this.proceedToPayment();
            });
        }

        const checkoutForm = document.getElementById('checkoutForm');
        if (checkoutForm) {
            checkoutForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.completeOrder();
            });
        }

        // Modal close events
        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const modal = e.target.closest('.modal');
                this.closeModal(modal);
            });
        });

        // Newsletter form
        const newsletterForm = document.getElementById('newsletterForm');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.subscribeNewsletter(e);
            });
        }

        // Close modals when clicking overlay
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.closeModal(e.target);
            }
        });
    }

    navigateToPage(page) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(p => {
            p.classList.remove('active');
            p.classList.add('hidden');
        });
        
        // Show target page
        const targetPage = document.getElementById(`${page}Page`);
        if (targetPage) {
            targetPage.classList.add('active');
            targetPage.classList.remove('hidden');
            this.currentPage = page;
            
            // Update navigation active state
            document.querySelectorAll('.nav__link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-page') === page) {
                    link.classList.add('active');
                }
            });

            // Load page-specific content
            if (page === 'shop') {
                this.loadShopPage();
            }
        }
    }

    loadHomePage() {
        // Load featured products (first 6)
        const featuredContainer = document.getElementById('featuredProducts');
        if (featuredContainer) {
            const featuredProducts = this.products.slice(0, 6);
            featuredContainer.innerHTML = this.renderProductGrid(featuredProducts);
            this.bindProductEvents(featuredContainer);
        }

        // Load new arrivals (last 6)
        const newArrivalsContainer = document.getElementById('newArrivals');
        if (newArrivalsContainer) {
            const newArrivals = this.products.slice(-6);
            newArrivalsContainer.innerHTML = this.renderProductGrid(newArrivals);
            this.bindProductEvents(newArrivalsContainer);
        }
    }

    loadShopPage() {
        this.filteredProducts = [...this.products];
        this.renderShopProducts();
    }

    bindProductEvents(container) {
        // Add click events to product cards for navigation to detail page
        container.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('button')) {
                    const productId = parseInt(card.dataset.productId);
                    this.openProductDetail(productId);
                }
            });
        });

        // Bind quick view buttons
        container.querySelectorAll('.quick-view-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = parseInt(e.target.closest('.product-card').dataset.productId);
                this.openQuickView(productId);
            });
        });

        // Bind add to cart buttons
        container.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = parseInt(e.target.closest('.product-card').dataset.productId);
                this.addToCart(productId);
            });
        });
    }

    renderProductGrid(products) {
        return products.map(product => `
            <div class="product-card" data-product-id="${product.id}">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                <div class="product-info">
                    <h4 class="product-name">${product.name}</h4>
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <div class="product-rating">
                        <span class="stars">${this.renderStars(product.rating)}</span>
                        <span class="rating-text">(${product.rating})</span>
                    </div>
                    <div class="product-actions">
                        <button class="btn btn--outline quick-view-btn">Quick View</button>
                        <button class="add-to-cart-btn">
                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5M17 13v8a2 2 0 01-2 2H9a2 2 0 01-2-2v-8"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderShopProducts() {
        const container = document.getElementById('shopProducts');
        if (container) {
            container.innerHTML = this.renderProductGrid(this.filteredProducts);
            this.bindProductEvents(container);
        }
    }

    renderStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let stars = '';
        
        for (let i = 0; i < fullStars; i++) {
            stars += '★';
        }
        if (hasHalfStar) {
            stars += '☆';
        }
        
        return stars;
    }

    openProductDetail(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        this.currentProduct = product;
        
        const productDetail = document.getElementById('productDetail');
        if (productDetail) {
            productDetail.innerHTML = `
                <div class="product-gallery">
                    <img src="${product.image}" alt="${product.name}" class="main-image">
                </div>
                <div class="product-details">
                    <h2>${product.name}</h2>
                    <div class="product-price-large">$${product.price.toFixed(2)}</div>
                    <div class="product-rating">
                        <span class="stars">${this.renderStars(product.rating)}</span>
                        <span class="rating-text">(${product.rating})</span>
                    </div>
                    <p class="product-description">${product.description}</p>
                    
                    <div class="product-options">
                        <div class="option-group">
                            <label class="option-label">Size:</label>
                            <div class="size-options">
                                ${product.sizes.map(size => `
                                    <div class="size-option" data-size="${size}">${size}</div>
                                `).join('')}
                            </div>
                        </div>
                        
                        <div class="option-group">
                            <label class="option-label">Color:</label>
                            <div class="color-options">
                                ${product.colors.map(color => `
                                    <div class="color-option" data-color="${color}">${color}</div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                    
                    <div class="quantity-selector">
                        <button class="quantity-btn" id="decreaseQty">-</button>
                        <input type="number" value="1" min="1" class="quantity-input" id="productQuantity">
                        <button class="quantity-btn" id="increaseQty">+</button>
                    </div>
                    
                    <div class="product-actions-detail">
                        <button class="btn btn--primary add-to-cart-detail" id="addToCartDetail">Add to Cart</button>
                        <button class="btn buy-now-btn" id="buyNowBtn">Buy Now</button>
                    </div>
                </div>
            `;

            // Bind option selection events
            productDetail.querySelectorAll('.size-option').forEach(option => {
                option.addEventListener('click', () => {
                    productDetail.querySelectorAll('.size-option').forEach(o => o.classList.remove('selected'));
                    option.classList.add('selected');
                });
            });

            productDetail.querySelectorAll('.color-option').forEach(option => {
                option.addEventListener('click', () => {
                    productDetail.querySelectorAll('.color-option').forEach(o => o.classList.remove('selected'));
                    option.classList.add('selected');
                });
            });

            // Bind quantity controls
            document.getElementById('decreaseQty').addEventListener('click', () => this.decreaseQuantity());
            document.getElementById('increaseQty').addEventListener('click', () => this.increaseQuantity());
            document.getElementById('addToCartDetail').addEventListener('click', () => this.addProductToCart());
            document.getElementById('buyNowBtn').addEventListener('click', () => this.buyNow());

            this.navigateToPage('product');
        }
    }

    openQuickView(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        const quickViewContent = document.getElementById('quickViewContent');
        if (quickViewContent) {
            quickViewContent.innerHTML = `
                <div class="product-gallery">
                    <img src="${product.image}" alt="${product.name}" class="main-image">
                </div>
                <div class="product-details">
                    <h3>${product.name}</h3>
                    <div class="product-price-large">$${product.price.toFixed(2)}</div>
                    <div class="product-rating">
                        <span class="stars">${this.renderStars(product.rating)}</span>
                        <span class="rating-text">(${product.rating})</span>
                    </div>
                    <p class="product-description">${product.description}</p>
                    <button class="btn btn--primary btn--full-width" id="quickAddToCart">Add to Cart</button>
                    <button class="btn btn--outline btn--full-width mt-8" id="quickViewDetails">View Details</button>
                </div>
            `;

            // Bind quick view buttons
            document.getElementById('quickAddToCart').addEventListener('click', () => {
                this.addToCart(productId);
                this.closeModal(document.getElementById('quickViewModal'));
            });

            document.getElementById('quickViewDetails').addEventListener('click', () => {
                this.openProductDetail(productId);
                this.closeModal(document.getElementById('quickViewModal'));
            });

            this.openModal('quickViewModal');
        }
    }

    addToCart(productId, options = {}) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        const cartItem = {
            id: Date.now(),
            productId: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            size: options.size || product.sizes[0],
            color: options.color || product.colors[0],
            quantity: options.quantity || 1
        };

        this.cart.push(cartItem);
        this.updateCartCount();
        this.renderCartItems();
        this.showToast('Item added to cart!');
    }

    addProductToCart() {
        if (!this.currentProduct) return;

        const selectedSize = document.querySelector('.size-option.selected')?.dataset.size || this.currentProduct.sizes[0];
        const selectedColor = document.querySelector('.color-option.selected')?.dataset.color || this.currentProduct.colors[0];
        const quantityInput = document.getElementById('productQuantity');
        const quantity = quantityInput ? parseInt(quantityInput.value) || 1 : 1;

        this.addToCart(this.currentProduct.id, {
            size: selectedSize,
            color: selectedColor,
            quantity: quantity
        });
    }

    increaseQuantity() {
        const input = document.getElementById('productQuantity');
        if (input) {
            input.value = parseInt(input.value) + 1;
        }
    }

    decreaseQuantity() {
        const input = document.getElementById('productQuantity');
        if (input) {
            const currentValue = parseInt(input.value);
            if (currentValue > 1) {
                input.value = currentValue - 1;
            }
        }
    }

    buyNow() {
        this.addProductToCart();
        this.openCheckoutModal();
    }

    removeFromCart(itemId) {
        this.cart = this.cart.filter(item => item.id !== itemId);
        this.updateCartCount();
        this.renderCartItems();
        this.showToast('Item removed from cart');
    }

    updateCartItemQuantity(itemId, quantity) {
        const item = this.cart.find(item => item.id === itemId);
        if (item) {
            item.quantity = Math.max(1, quantity);
            this.updateCartCount();
            this.renderCartItems();
        }
    }

    updateCartCount() {
        const count = this.cart.reduce((total, item) => total + item.quantity, 0);
        const cartCountElement = document.getElementById('cartCount');
        if (cartCountElement) {
            cartCountElement.textContent = count;
        }
    }

    calculateCartTotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    renderCartItems() {
        const container = document.getElementById('cartItems');
        const total = this.calculateCartTotal();
        
        const cartTotalElement = document.getElementById('cartTotal');
        if (cartTotalElement) {
            cartTotalElement.textContent = total.toFixed(2);
        }
        
        const checkoutTotalElement = document.getElementById('checkoutTotal');
        if (checkoutTotalElement) {
            checkoutTotalElement.textContent = total.toFixed(2);
        }

        if (!container) return;

        if (this.cart.length === 0) {
            container.innerHTML = '<p class="text-center py-16">Your cart is empty</p>';
            return;
        }

        container.innerHTML = this.cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-options">Size: ${item.size}, Color: ${item.color}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="window.app.updateCartItemQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <input type="number" value="${item.quantity}" class="cart-item-qty" readonly>
                        <button class="quantity-btn" onclick="window.app.updateCartItemQuantity(${item.id}, ${item.quantity + 1})">+</button>
                        <button class="btn btn--outline btn--sm" onclick="window.app.removeFromCart(${item.id})" style="margin-left: auto;">Remove</button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    toggleCartSidebar() {
        const cartSidebar = document.getElementById('cartSidebar');
        const overlay = document.getElementById('overlay');
        
        if (cartSidebar && overlay) {
            cartSidebar.classList.toggle('active');
            overlay.classList.toggle('active');
            
            if (cartSidebar.classList.contains('active')) {
                this.renderCartItems();
            }
        }
    }

    closeCartSidebar() {
        const cartSidebar = document.getElementById('cartSidebar');
        const overlay = document.getElementById('overlay');
        
        if (cartSidebar) cartSidebar.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
    }

    openCheckoutModal() {
        this.closeCartSidebar();
        this.openModal('checkoutModal');
        const checkoutTotalElement = document.getElementById('checkoutTotal');
        if (checkoutTotalElement) {
            checkoutTotalElement.textContent = this.calculateCartTotal().toFixed(2);
        }
    }

    proceedToPayment() {
        // Simple form validation
        const shippingStep = document.getElementById('shippingStep');
        const inputs = shippingStep.querySelectorAll('input[required]');
        let valid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                valid = false;
                input.style.borderColor = 'var(--color-error)';
            } else {
                input.style.borderColor = 'var(--color-border)';
            }
        });

        if (valid) {
            shippingStep.classList.remove('active');
            const paymentStep = document.getElementById('paymentStep');
            if (paymentStep) {
                paymentStep.classList.add('active');
            }
        } else {
            this.showToast('Please fill in all required fields', 'error');
        }
    }

    completeOrder() {
        // Simulate order processing
        this.showToast('Processing order...', 'info');
        
        setTimeout(() => {
            const orderNumber = Math.floor(Math.random() * 1000000);
            this.cart = [];
            this.updateCartCount();
            this.closeModal(document.getElementById('checkoutModal'));
            this.showToast(`Order #${orderNumber} completed successfully!`, 'success');
            
            // Reset checkout form
            const paymentStep = document.getElementById('paymentStep');
            const shippingStep = document.getElementById('shippingStep');
            const checkoutForm = document.getElementById('checkoutForm');
            
            if (paymentStep) paymentStep.classList.remove('active');
            if (shippingStep) shippingStep.classList.add('active');
            if (checkoutForm) checkoutForm.reset();
        }, 2000);
    }

    handleSearch(query) {
        const searchResults = document.getElementById('searchResults');
        
        if (!searchResults) return;
        
        if (!query.trim()) {
            searchResults.innerHTML = '';
            return;
        }

        const filteredProducts = this.products.filter(product => 
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase())
        );

        if (filteredProducts.length === 0) {
            searchResults.innerHTML = '<div class="search-result-item">No products found</div>';
            return;
        }

        searchResults.innerHTML = filteredProducts.map(product => `
            <div class="search-result-item" onclick="window.app.openProductDetail(${product.id}); window.app.closeSearch()">
                <strong>${product.name}</strong> - $${product.price.toFixed(2)}
            </div>
        `).join('');
    }

    closeSearch() {
        const searchBar = document.getElementById('searchBar');
        const searchInput = document.getElementById('searchInput');
        const searchResults = document.getElementById('searchResults');
        
        if (searchBar) searchBar.classList.add('hidden');
        if (searchInput) searchInput.value = '';
        if (searchResults) searchResults.innerHTML = '';
    }

    applyFilters() {
        const categoryFilters = Array.from(document.querySelectorAll('#categoryFilters input:checked')).map(cb => cb.value);
        const priceFilters = Array.from(document.querySelectorAll('.filter-options input[value*="-"]:checked, .filter-options input[value$="+"]:checked')).map(cb => cb.value);

        this.filteredProducts = this.products.filter(product => {
            // Category filter
            const categoryMatch = categoryFilters.length === 0 || categoryFilters.includes(product.category);
            
            // Price filter
            let priceMatch = priceFilters.length === 0;
            if (priceFilters.length > 0) {
                priceMatch = priceFilters.some(filter => {
                    if (filter === '0-50') return product.price < 50;
                    if (filter === '50-100') return product.price >= 50 && product.price <= 100;
                    if (filter === '100-150') return product.price >= 100 && product.price <= 150;
                    if (filter === '150+') return product.price > 150;
                    return false;
                });
            }

            return categoryMatch && priceMatch;
        });

        this.renderShopProducts();
    }

    sortProducts(sortBy) {
        switch (sortBy) {
            case 'price-low':
                this.filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                this.filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'name':
                this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'rating':
                this.filteredProducts.sort((a, b) => b.rating - a.rating);
                break;
            default:
                this.filteredProducts = [...this.products];
        }

        this.renderShopProducts();
    }

    clearFilters() {
        document.querySelectorAll('#categoryFilters input, .filter-options input').forEach(cb => {
            cb.checked = false;
        });
        const sortSelect = document.getElementById('sortSelect');
        if (sortSelect) sortSelect.value = 'default';
        this.filteredProducts = [...this.products];
        this.renderShopProducts();
    }

    toggleMobileMenu() {
        const nav = document.getElementById('nav');
        if (nav) {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        }
    }

    subscribeNewsletter(e) {
        const emailInput = e.target.querySelector('input[type="email"]');
        const email = emailInput ? emailInput.value : '';
        this.showToast(`Thanks for subscribing with ${email}!`, 'success');
        e.target.reset();
    }

    openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    }

    closeModal(modal) {
        if (typeof modal === 'string') {
            modal = document.getElementById(modal);
        }
        if (modal) {
            modal.classList.remove('active');
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    }

    showToast(message, type = 'success') {
        const toast = document.getElementById('toast');
        const toastContent = document.getElementById('toastContent');
        
        if (toast && toastContent) {
            toastContent.textContent = message;
            toast.className = `toast active ${type}`;
            
            setTimeout(() => {
                toast.classList.remove('active');
            }, 3000);
        }
    }
}

// Initialize the application and make it globally available
window.app = new ClothifyApp();

// Additional event listeners for dynamic content
document.addEventListener('DOMContentLoaded', () => {
    // Handle escape key to close modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.active').forEach(modal => {
                window.app.closeModal(modal);
            });
            
            const cartSidebar = document.getElementById('cartSidebar');
            if (cartSidebar && cartSidebar.classList.contains('active')) {
                window.app.closeCartSidebar();
            }
            
            const searchBar = document.getElementById('searchBar');
            if (searchBar && !searchBar.classList.contains('hidden')) {
                window.app.closeSearch();
            }
        }
    });

    // Handle clicks outside cart sidebar
    document.addEventListener('click', (e) => {
        const cartSidebar = document.getElementById('cartSidebar');
        const cartToggle = document.getElementById('cartToggle');
        
        if (cartSidebar && cartToggle && cartSidebar.classList.contains('active') && 
            !cartSidebar.contains(e.target) && 
            !cartToggle.contains(e.target)) {
            window.app.closeCartSidebar();
        }
    });
});