// Get the canvas element and set up the context
const canvas = document.getElementById('shapeCanvas');
const ctx = canvas.getContext('2d');

// Resize the canvas to fill the browser window dynamically
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Mouse position tracking
let mouse = {
    x: canvas.width / 2,
    y: canvas.height / 2
};

// Create an array to store all the shapes
let shapes = [];
const shapeColor = '#26272c'; // Same color for all shapes
const shapeSize = 10; // Same size for all shapes
const shapeCount = 200; // Total number of shapes

// Function to generate random number within a range
function random(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to draw a pentagon
function drawPentagon(x, y, size) {
    const numberOfSides = 5;
    const angle = (Math.PI * 2) / numberOfSides;

    ctx.beginPath();
    for (let i = 0; i <= numberOfSides; i++) {
        const px = x + size / 2 * Math.cos(i * angle);
        const py = y + size / 2 * Math.sin(i * angle);
        ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();
}

// Shape class to define different shapes
class Shape {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type; // Different shapes (circle, square, triangle, pentagon)
        this.dx = random(-2, 2); // Horizontal speed
        this.dy = random(-2, 2); // Vertical speed
        this.size = shapeSize;
        this.color = shapeColor;
        this.attractionForce = 0.09; // The speed at which the shape gets attracted to the cursor
    }

    // Method to draw the shapes
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();

        if (this.type === 'circle') {
            ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2, false);
        } else if (this.type === 'square') {
            ctx.rect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
        } else if (this.type === 'triangle') {
            ctx.moveTo(this.x, this.y - this.size / 2);
            ctx.lineTo(this.x - this.size / 2, this.y + this.size / 2);
            ctx.lineTo(this.x + this.size / 2, this.y + this.size / 2);
            ctx.closePath();
        } else if (this.type === 'pentagon') {
            drawPentagon(this.x, this.y, this.size); // Draw the pentagon
        }

        ctx.fill();
    }

    // Method to update shape positions
    update() {
        // Calculate distance from the mouse pointer
        let distX = mouse.x - this.x;
        let distY = mouse.y - this.y;
        let distance = Math.sqrt(distX * distX + distY * distY);

        // Apply attraction effect if the shape is near the cursor
        if (distance < 150) {
            this.x += distX * this.attractionForce;
            this.y += distY * this.attractionForce;
        }

        // Otherwise, move the shape normally
        this.x += this.dx;
        this.y += this.dy;

        // Reverse direction if they hit the edge of the screen
        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
            this.dy = -this.dy;
        }

        // Draw the updated shape
        this.draw();
    }
}

// Initialize 100 shapes
for (let i = 0; i < shapeCount; i++) {
    let x = random(shapeSize, canvas.width - shapeSize);
    let y = random(shapeSize, canvas.height - shapeSize);
    let shapeType = ['circle', 'square', 'triangle', 'pentagon'][Math.floor(random(0, 4))]; // Added pentagon as an option

    shapes.push(new Shape(x, y, shapeType));
}

// Event listener to update mouse position
window.addEventListener('mousemove', function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

// Animation loop to continuously update and draw the shapes
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    shapes.forEach(shape => {
        shape.update();
    });

    requestAnimationFrame(animate);
}
var nahs = Math.floor(random(0,100))
animate();
