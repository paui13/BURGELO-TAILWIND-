// Cart functionality
document.addEventListener("DOMContentLoaded", () => {
    
    const cartBtn = document.querySelector(".cart__btn");
    const cart = document.querySelector(".cart");
    const cartCloseBtn = document.querySelector(".close");
    const cartCloseSpan = document.querySelector(".blkOpacity");

    if (cartBtn && cart) {
        cartBtn.addEventListener("click", () => {
            cart.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    }

    if (cartCloseBtn && cart) {
        cartCloseBtn.addEventListener("click", () => {
            cart.classList.remove("active");
            document.body.style.overflow = "auto";
        });
    }

    if (cartCloseSpan && cart) {
        cartCloseSpan.addEventListener("click", () => {
            cart.classList.remove("active");
            document.body.style.overflow = "auto";
        });
    }
});
