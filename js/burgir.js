const burgirBtn = document.querySelector(".burgir");
const headerNav = document.querySelector(".header__nav");

burgirBtn.addEventListener("click", () => {
    burgirBtn.classList.toggle("open");
    headerNav.classList.toggle("open");
});

const menuNav = document.querySelectorAll(".tab__nav__link");
const menuTab = document.querySelector(".menu__content")
const menuContent = document.querySelectorAll(".menu__content__item");
const sliderNav = document.querySelectorAll(".slider__nav__container")

menuNav.forEach((menu) => {
    menu.addEventListener('click', () => {
        removeActiveMenu();
        removeActiveNav();
        menu.classList.add('active');
        menuTab.style.opacity = 0;
        menuTab.style.transform = "translateX(-30rem)"
        setTimeout(() => {
            menuTab.style.transform = "translateX(30rem)"
        }, 100);
        setTimeout(() => {
            const activeContent = document.querySelectorAll(`#${menu.id}-content`);
            removeActiveContent();
            activeContent.forEach((content) => {
                content.classList.add('active');
            });
            menuTab.style.transform = "translateX(0)"
            menuTab.style.opacity = 1;
        }, 250);
        const currSliderNav = document.querySelector(`#${menu.id}-content-nav`)
        if (currSliderNav) {
            currSliderNav.classList.add("active");
        }
    });
});

function removeActiveNav() {
    sliderNav.forEach((nav) => {
        nav.classList.remove("active")
    })
}

function removeActiveMenu() {
    menuNav.forEach((menu) => {
        menu.classList.remove("active");
    }) 
}

function removeActiveContent() {
    menuContent.forEach((menu) => {
        menu.classList.remove("active");
    }) 
}

// scroll--button
const scroll_notif = document.querySelector(".scroll");

window.addEventListener("scroll", () =>{
    if(scrollY >= 200){
        scroll_notif.classList.remove("scale-0");
    }else{
        scroll_notif.classList.add("scale-0");
    }
});

scroll_notif.addEventListener("click", () => {
    globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});
// scroll--button--end

function show__menu() {
    document.querySelector(".home__menu").classList.toggle("active");
    document.querySelector(".home__menu__btn").classList.toggle("active");
}