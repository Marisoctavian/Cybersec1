/*Copyright Mariș Octavian-Codrin 2025 */
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

// Make the canvas full-screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Characters to use in the Matrix effect
const matrixChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 16;
const columns = canvas.width / fontSize;

// Array to store falling character positions
const drops = Array(Math.floor(columns)).fill(0);

function drawMatrixEffect() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)"; // Fading effect
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff00"; // Matrix green color
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const text = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop position when it reaches the bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

// Run the animation at 50ms intervals
setInterval(drawMatrixEffect, 50);

// Resize canvas if window size changes
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});