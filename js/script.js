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

Shery.textAnimate(".headingh1", {
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

Shery.hoverWithMediaCircle(".headingh1,.project-seen h1, .section-4 h2,project img", {
    images: ["image1.jpg", "image2.jpg", "image3.jpg"],

});
menuIcon.addEventListener('click', () => {
    gsap.to(sidebarMenu, {
        x: sidebarMenu.classList.contains('menu-open') ? 0 : 300,
        duration: 0.8,
        ease: "power2.out",
    });
    sidebarMenu.classList.toggle('menu-open');
});
Shery.imageEffect(".img-div img", {
    style: 3,
    debug: true,

});
gsap.registerPlugin(ScrollTrigger);

gsap.to(".projects-section", {
    x: () => -(document.querySelector(".projects-section").scrollWidth - window.innerWidth),
    ease: "none",
    scrollTrigger: {
        trigger: ".projects-section",
        pin: true, // Pins the section while scrolling horizontally
        start: "top top", // Starts when the section reaches the top of the viewport
        scrub: 1, // Smooth scrolling effect
        mark:true,
        end: () => "+=" + document.querySelector(".projects-section").scrollWidth, // Ends after scrolling through all projects
    }
});

