// Get elements
const boxes = document.querySelectorAll('.chocolate-box');
const overlay = document.getElementById('overlay');
const meltedChocolate = document.getElementById('meltedChocolate');
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
        // Hide the container
        document.querySelector('.container').style.display = 'none';

        // Show overlay
        overlay.style.display = 'flex';

        // Trigger melt animation
        meltedChocolate.style.animation = 'melt 1.5s ease-out forwards';

        // Set the message with typing animation
        typingText.textContent = messages[index];
        typingText.style.animation = 'none'; // Reset animation
        setTimeout(() => {
            typingText.style.animation = ''; // Re-enable animation
        }, 10);

        // Fade in the message after the melt animation
        setTimeout(() => {
            document.querySelector('.message').style.opacity = '1';
        }, 1500); // Match the duration of the melt animation

        // Close overlay on click
        overlay.addEventListener('click', () => {
            overlay.style.display = 'none';
            document.querySelector('.container').style.display = 'flex'; // Show boxes again
        });
    });
});
