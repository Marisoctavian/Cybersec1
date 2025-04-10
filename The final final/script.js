/*Copyright Mariș Octavian-Codrin 2025 */
/*Security tips with imagines rotating in an array */
const tips = [
    { 
        text: "Use strong, unique passwords for each account! 🔐", 
        image: "./imagines/password_security.jpg" 
    },
    { 
        text: "Enable two-factor authentication (2FA) whenever possible. 📲", 
        image: "./imagines/F2.png" 
    },
    { 
        text: "Think before you click! Watch out for phishing emails. 🎣", 
        image: "./imagines/fishing.png" 
    },
    { 
        text: "Update your software regularly to patch security vulnerabilities. 🔄", 
        image: "./imagines/software_update.jpg" 
    },
    { 
        text: "Never share personal information on unsecured websites! 🚫", 
        image: "./imagines/not_secure.png" 
    }
];

// Function to display a random tip inside a bubble
function showRandomTip() {
    let randomTip = tips[Math.floor(Math.random() * tips.length)];

    let tipBubble = document.createElement("div");
    tipBubble.id = "tip-bubble";

    let tipImage = document.createElement("img");
    tipImage.src = randomTip.image;
    tipImage.className = "tip-img";

    let tipText = document.createElement("p");
    tipText.innerHTML = "💡 " + randomTip.text;

    tipBubble.appendChild(tipImage);
    tipBubble.appendChild(tipText);

    document.body.appendChild(tipBubble);
}

// Run function when the page loads
window.onload = showRandomTip;



/* Hacker Typing */ 

const text = "Welcome to the Cybersecurity Challenges!";//line 1
const text1 = "Where learning and having fun can be done at the same time!";//line 2
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    } else {
        // Start typing the 2nd line
        index = 0;
        document.getElementById("typing-text").innerHTML += "<br>";
        typeSecondLine();
    }
}

function typeSecondLine() {
    if (index < text1.length) {
        document.getElementById("typing-text").innerHTML += text1.charAt(index);
        index++;
        setTimeout(typeSecondLine, 100);
    }
}

window.onload = function() {
    typeEffect();
    showRandomTip();
};