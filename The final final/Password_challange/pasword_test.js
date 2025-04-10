/*Copyright Mariș Octavian-Codrin 2025 */
document.getElementById("password-input").addEventListener("input", checkPasswordStrength);

document.getElementById("password-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkPasswordStrength();
    }
});

function checkPasswordStrength() {
    const password = document.getElementById("password-input").value;
    const strengthIndicator = document.getElementById("password-strength");

    // Regular expressions for strength check
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    const mediumRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    
    if (strongRegex.test(password)) {
        strengthIndicator.innerText = "Strong 🟢";
        strengthIndicator.classList.remove("weak", "medium");
        strengthIndicator.classList.add("strong");
    } else if (mediumRegex.test(password)) {
        strengthIndicator.innerText = "Medium 🟡";
        strengthIndicator.classList.remove("weak", "strong");
        strengthIndicator.classList.add("medium");
    } else if (password.length > 0) {
        strengthIndicator.innerText = "Weak 🔴";
        strengthIndicator.classList.remove("medium", "strong");
        strengthIndicator.classList.add("weak");
    }else {
        strengthIndicator.innerText = "";
    }
}