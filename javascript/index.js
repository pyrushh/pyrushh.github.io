// Function to open the link related to the numbers
function handleKeyPress(event) {
  if (
    event.key === "1" ||
    event.key === "2" ||
    event.key === "3" ||
    event.key === "4" ||
    event.key === "5"
  ) {
    const index = parseInt(event.key) - 1;
    const anchors = document.querySelectorAll(".link.body-links");
    if (index >= 0 && index < anchors.length) {
      anchors[index].click();
    }
  }
}
document.addEventListener("keydown", handleKeyPress);
function handleBackspaceKeyPress(event) {
  if (event.key === "Backspace") {
    const anchor = document.getElementById("name");

    if (anchor) {
      anchor.click();
    }
  }
}
document.addEventListener("keydown", handleBackspaceKeyPress);
function handleBackAnchorClick() {
  const anchor = document.getElementById("name");
  if (anchor) {
    anchor.click();
  }
}
document.addEventListener("keydown", function (event) {
  if (event.key === "Backspace") {
    handleBackAnchorClick();
  }
});
