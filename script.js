/*document.addEventListener('DOMContentLoaded', () => {
    const menuItems = {
        mainCourse: [
            { name: 'Chicken Shawarma', price: 90 },
            { name: 'Chicken Biryani', price: 300 },
            { name: 'Paneer Butter Masala', price: 400 },
            { name: 'Mutton Biryani', price: 350 },
            { name: 'French Fries', price: 120 },
            { name: 'Pasta', price: 200 },
            { name: 'Veg Biryani', price: 250 }
        ],
        beverages: [
            { name: 'Mango Lassi', price: 150 },
            { name: 'Fruit Salad', price: 100 },
            { name: 'Milk Shake', price: 130 },
            { name: 'Coffee', price: 90 },
            { name: 'Cocktail', price: 180 }
        ]
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const mainCourseContainer = document.getElementById('main-course-container');
    const beveragesContainer = document.getElementById('beverages-container');
    const cartCountSpan = document.getElementById('cart-count');
    const cartModal = document.getElementById('cartModal');
    const closeButton = document.querySelector('.close-button');
    const cartIcon = document.getElementById('cart-icon');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout-button');

    function renderMenuItems(category, container) {
        container.innerHTML = ''; // Clear existing items
        menuItems[category].forEach(item => {
            const menuCard = document.createElement('div');
            menuCard.classList.add('menu-card');
            menuCard.innerHTML = `
                <h3>${item.name}</h3>
                <p>₹ ${item.price}</p>
                <button class="add-to-cart" data-name="${item.name}" data-price="${item.price}">Add to Cart</button>
            `;
            container.appendChild(menuCard);
        });
        document.querySelectorAll('.add-to-cart').forEach(button => {
        button.removeEventListener('click', handleAddToCart);
        button.addEventListener('click', handleAddToCart);
        });
        // addAddToCartListeners();
    }
function handleAddToCart(event) {
    const name = event.target.dataset.name;
    const price = parseFloat(event.target.dataset.price);
    addItemToCart(name, price);
}
    
    function addAddToCartListeners() {
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', (event) => {
                const name = event.target.dataset.name;
                const price = parseFloat(event.target.dataset.price);
                addItemToCart(name, price);
            });
        });
    }

    function addItemToCart(name, price) {
        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ name, price, quantity: 1 });
        }
        updateCartDisplay();
        saveCart();
    }

    function removeItemFromCart(name) {
        cart = cart.filter(item => item.name !== name);
        updateCartDisplay();
        saveCart();
    }

    function updateCartDisplay() {
        let totalItems = 0;
        let totalPrice = 0;
        cartItemsList.innerHTML = '';

        if (cart.length === 0) {
            cartItemsList.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            cart.forEach(item => {
                totalItems += item.quantity;
                totalPrice += item.price * item.quantity;

                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <span>${item.name} x ${item.quantity}</span>
                    <span>₹ ${item.price * item.quantity} 
                        <span class="remove-item" data-name="${item.name}">(Remove)</span>
                    </span>
                `;
                cartItemsList.appendChild(listItem);
            });
        }
        cartCountSpan.textContent = totalItems;
        cartTotalSpan.textContent = `Total: ₹ ${totalPrice}`;

        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', (event) => {
                const name = event.target.dataset.name;
                removeItemFromCart(name);
            });
        });
    }

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    cartIcon.addEventListener('click', (event) => {
        event.preventDefault();
        cartModal.style.display = 'block';
        updateCartDisplay();
    });

    closeButton.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });

    checkoutButton.addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Proceeding to checkout with your order!');
            cart = [];
            updateCartDisplay();
            saveCart();
            cartModal.style.display = 'none';
        } else {
            alert('Your cart is empty. Please add items before checking out.');
        }
    });
    renderMenuItems('mainCourse', mainCourseContainer);
    renderMenuItems('beverages', beveragesContainer);
    updateCartDisplay();
});
*/
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = {
        mainCourse: [
            { name: 'Chicken Shawarma', price: 90 },
            { name: 'Chicken Biryani', price: 300 },
            { name: 'Paneer Butter Masala', price: 400 },
            { name: 'Mutton Biryani', price: 350 },
            { name: 'French Fries', price: 120 },
            { name: 'Pasta', price: 200 },
            { name: 'Veg Biryani', price: 250 }
        ],
        beverages: [
            { name: 'Mango Lassi', price: 150 },
            { name: 'Fruit Salad', price: 100 },
            { name: 'Milk Shake', price: 130 },
            { name: 'Coffee', price: 90 },
            { name: 'Cocktail', price: 180 }
        ]
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const mainCourseContainer = document.getElementById('main-course-container');
    const beveragesContainer = document.getElementById('beverages-container');
    const cartCountSpan = document.getElementById('cart-count');
    const cartModal = document.getElementById('cartModal');
    const closeButton = document.querySelector('.close-button');
    const cartIcon = document.getElementById('cart-icon');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout-button');

    function renderMenuItems(category, container) {
        container.innerHTML = ''; // Clear existing items
        menuItems[category].forEach(item => {
            const menuCard = document.createElement('div');
            menuCard.classList.add('menu-card');
            menuCard.innerHTML = `
                <h3>${item.name}</h3>
                <p>₹ ${item.price}</p>
                <button class="add-to-cart" data-name="${item.name}" data-price="${item.price}">Add to Cart</button>
            `;
            container.appendChild(menuCard);
        });

        console.log(`Rendering items for ${category}`); // Debugging log

        // Prevent duplicate event listeners
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.replaceWith(button.cloneNode(true)); // Remove & re-add buttons
        });

        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', handleAddToCart);
        });
    }

    function handleAddToCart(event) {
        const name = event.target.dataset.name;
        const price = parseFloat(event.target.dataset.price);
        addItemToCart(name, price);
    }

    function addItemToCart(name, price) {
        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ name, price, quantity: 1 });
        }
        updateCartDisplay();
        saveCart();
    }

    function removeItemFromCart(name) {
        cart = cart.filter(item => item.name !== name);
        updateCartDisplay();
        saveCart();
    }

    function updateCartDisplay() {
        let totalItems = 0;
        let totalPrice = 0;
        cartItemsList.innerHTML = '';

        if (cart.length === 0) {
            cartItemsList.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            cart.forEach(item => {
                totalItems += item.quantity;
                totalPrice += item.price * item.quantity;

                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <span>${item.name} x ${item.quantity}</span>
                    <span>₹ ${item.price * item.quantity} 
                        <span class="remove-item" data-name="${item.name}">(Remove)</span>
                    </span>
                `;
                cartItemsList.appendChild(listItem);
            });
        }
        cartCountSpan.textContent = totalItems;
        cartTotalSpan.textContent = `Total: ₹ ${totalPrice}`;

        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', (event) => {
                const name = event.target.dataset.name;
                removeItemFromCart(name);
            });
        });
    }

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    cartIcon.addEventListener('click', (event) => {
        event.preventDefault();
        cartModal.style.display = 'block';
        updateCartDisplay();
    });

    closeButton.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });

    checkoutButton.addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Proceeding to checkout with your order!');
            cart = [];
            updateCartDisplay();
            saveCart();
            cartModal.style.display = 'none';
        } else {
            alert('Your cart is empty. Please add items before checking out.');
        }
    });

    renderMenuItems('mainCourse', mainCourseContainer);
    renderMenuItems('beverages', beveragesContainer);
    updateCartDisplay();
});
