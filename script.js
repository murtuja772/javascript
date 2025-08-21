const textArea = document.getElementById("textArea");
const charCount = document.getElementById("charCount");

textArea.addEventListener("input", () => {
  // Remove spaces before counting
  const textWithoutSpaces = textArea.value.replace(/\s/g, "");
  charCount.textContent = textWithoutSpaces.length;
});

