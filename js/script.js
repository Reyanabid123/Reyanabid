// Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true,
    lerp: 0.2
});

// Sidebar Menu Toggle
const menuIcon = document.querySelector('.menu-icon');
const sidebarMenu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
    sidebarMenu.classList.toggle('menu-open');

});

// Shery.js Effects
Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.1,
    locomotive: true,
});

Shery.makeMagnet(".navbar-section h1, .section-4 button", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

Shery.textAnimate(".headingh1,.project span", {
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

Shery.hoverWithMediaCircle(".headingh1,.project-seen h1, .section-4 h2,project img", {
    images: ["image1.jpg", "image2.jpg", "image3.jpg"],

});
Shery.imageEffect(".project img", {
    style: 3,
    preset:"../dist/config.json"
});