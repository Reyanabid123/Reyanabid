const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true,
lerp:0.2
});


Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.1,
    locomotive:true,
});
Shery.makeMagnet(".navbar-section h1" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});
Shery.textAnimate(".headingh1" /* Element to target.*/, {
    //Parameters are optional.
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});
Shery.hoverWithMediaCircle(".headingh1" /* Element to target.*/, {
    images: ["", "image2.jpg", "image3.jpg"] /*OR*/,
});