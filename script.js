const textArea = document.getElementById("textArea");
const charCount = document.getElementById("charCount");

// Event listener for typing
textArea.addEventListener("input", () => {
  charCount.textContent = textArea.value.length;
});
