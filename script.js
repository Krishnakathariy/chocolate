// Get elements
const boxes = document.querySelectorAll('.chocolate-box');
const overlay = document.getElementById('overlay');
const typingText = document.querySelector('.typing-animation');

// Messages for each box
const messages = [
    "You are as sweet as chocolate! 🍫",
    "Every moment with you is delightful! 🍫",
    "You make life sweeter! 🍫"
];

// Add click event to each box
boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        // Show overlay
        overlay.style.display = 'flex';

        // Set the message with typing animation
        typingText.textContent = messages[index];
        typingText.style.animation = 'none'; // Reset animation
        setTimeout(() => {
            typingText.style.animation = ''; // Re-enable animation
        }, 10);

        // Close overlay on click
        overlay.addEventListener('click', () => {
            overlay.style.display = 'none';
        });
    });
});
