// Function to open the link related to the numbers
function handleKeyPress(event) {
  if (
    event.key === "1" ||
    event.key === "2" ||
    event.key === "3" ||
    event.key === "4"
  ) {
    const index = parseInt(event.key) - 1;
    const anchors = document.querySelectorAll(".link.body-links");
    if (index >= 0 && index < anchors.length) {
      anchors[index].click();
    }
  }
}
// Add the key press event listener to the document
document.addEventListener("keydown", handleKeyPress);
// Function to handle "backspace" key press
function handleBackspaceKeyPress(event) {
  if (event.key === "Backspace") {
    const anchor = document.getElementById("name");

    if (anchor) {
      anchor.click();
    }
  }
}
// Add the key press event listener to the document
document.addEventListener("keydown", handleBackspaceKeyPress);
// Function to handle "Back" anchor click
function handleBackAnchorClick() {
  const anchor = document.getElementById("name");
  if (anchor) {
    anchor.click();
  }
}
// Add a click event listener to the "Back" anchor tag
document.addEventListener("keydown", function (event) {
  if (event.key === "Backspace") {
    handleBackAnchorClick();
  }
});
//its working
