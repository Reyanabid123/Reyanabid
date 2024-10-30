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

Shery.hoverWithMediaCircle(".headingh1,.project-seen h1, .section-4 h2", {
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
// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff, 0); // Set background to white with no adjustments to color
document.body.appendChild(renderer.domElement);

// Load the 3D Model
const loader = new THREE.GLTFLoader();
loader.load('assects/images/mini_robot.glb', function (gltf) {
    const model = gltf.scene;
    model.position.set(0, -1, 0);
    model.scale.set(1, 1, 1);

    // Add model to the scene without material adjustments
    scene.add(model);
    animate();
}, undefined, function (error) {
    console.error('An error occurred while loading the model:', error);
});

// Default Lighting Setup for Better Color Accuracy
const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Strong ambient light for uniform lighting
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // Slight directional light for shadows
directionalLight.position.set(1, 1, 1).normalize();
scene.add(directionalLight);

// Camera Position
camera.position.z = 3;

// Orbit Controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.rotateSpeed = 0.3;

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

// Handle resizing
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});