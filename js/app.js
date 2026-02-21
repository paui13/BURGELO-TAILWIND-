// App initialization
document.addEventListener("DOMContentLoaded", () => {
    
    const menuPageContentHTML = document.querySelector(".menu__page__content");
    let products = [];

    const addDataToHTML = () => {
        // Check if products exist
        if (products.length > 0 && menuPageContentHTML) {
            // If there is data, create product elements
            products.forEach((product) => {
                // Create new div for product
                let newProduct = document.createElement("div");
                // Set product ID from products.json
                newProduct.dataset.id = product.id;
                // Add class name
                newProduct.classList.add("menu__page__content__item");
                newProduct.classList.add("active");
                
                // Build HTML for product
                newProduct.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <div class="menu__page__content__text">
                        <h4>${product.name}</h4>
                        <h3>${product.price}</h3>
                        <p>${product.desc}</p>
                    </div>
                    <a href="javascript:void(0);" class="btn bg--primary">
                        <span>ADD TO CART</span>
                    </a>
                `;
                menuPageContentHTML.appendChild(newProduct);
            });
        }
    };

    const initApp = () => {
        // Get products from JSON
        fetch("products.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                products = data;
                addDataToHTML();
            })
            .catch((error) => {
                console.error("Error loading products:", error);
            });
    };

    // Only run if menuPageContentHTML exists (menu.html page)
    if (menuPageContentHTML) {
        initApp();
    }
});
