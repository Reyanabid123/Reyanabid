function generatePasswords() {
    const passwordContainer = document.getElementById('passwordContainer');
    passwordContainer.innerHTML = ''; // Clear previous passwords

    const passwords = Array.from({ length: 50 }, () => createPassword());
    passwords.forEach(password => {
        const passwordBox = document.createElement('div');
        passwordBox.className = 'password-box';
        passwordBox.innerHTML = `
            <span>${password}</span>
            <button class="copy-btn" onclick="copyPassword('${password}')">Copy</button>
        `;
        passwordContainer.appendChild(passwordBox);
    });

    showRandomSuggestion();
}

function createPassword() {
    const length = 12;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomChar = characters[Math.floor(Math.random() * characters.length)];
        password += randomChar;
    }

    return password;
}

function copyPassword(password) {
    navigator.clipboard.writeText(password).then(() => {
        showPopup("✔️ Password copied to clipboard!");
    });
}

function showPopup(message) {
    const popup = document.getElementById('popup');
    popup.textContent = message;
    popup.classList.add('show');

    // Remove the popup after 2 seconds
    setTimeout(() => {
        popup.classList.remove('show');
    }, 2000);
}

function showRandomSuggestion() {
    const suggestions = [
        "Tip: Use unique passwords for different accounts!",
        "Reminder: Change your passwords every 3 months.",
        "Security: Avoid using personal information in passwords.",
        "Suggestion: Enable two-factor authentication for better security.",
        "Tip: Don't reuse passwords on multiple sites."
    ];
    const suggestionElement = document.getElementById('suggestion');
    const randomIndex = Math.floor(Math.random() * suggestions.length);
    suggestionElement.textContent = suggestions[randomIndex];
}
    