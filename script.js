const messages = [
  "You’re the sweetness in my life. ❤️",
  "Every moment with you feels like a treat. 🍫",
  "I can’t wait to share real chocolates with you soon! 🥰",
  "You’re my favorite flavor in this world. 😘"
];

function revealMessage(index) {
  const messageBox = document.getElementById('message-box');
  messageBox.textContent = messages[index - 1];
  messageBox.style.fontWeight = 'bold';
}
