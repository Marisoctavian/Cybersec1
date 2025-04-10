/*Copyright Mariș Octavian-Codrin 2025 */
// Generate a random 4-digit PIN
const secretPin = Math.floor(1000 + Math.random() * 9000);

// Print the PIN in the console (hidden hint for users)
console.log("💡 HINT: The secret vault PIN is", secretPin);

function checkVault() {
    const userPin = document.getElementById("vaultCode").value;
    const vault = document.querySelector(".vault");

    if (parseInt(userPin) === secretPin) {
        document.getElementById("vaultMessage").innerHTML = "✅ Vault Unlocked!";
        document.getElementById("vaultMessage").style.color = "green";
        vault.classList.add("open"); // Triggers door animation
    } else {
        document.getElementById("vaultMessage").innerHTML = "❌ Wrong code! Try again.";
        document.getElementById("vaultMessage").style.color = "red";
    }
}