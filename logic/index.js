var typed = new Typed("#element", {
  strings: [
    "Hello..",
    " Namaste...",
    "Bonjour...",
    "Nǐn hǎo...",
    "Konnichiwa...",
    "Hola...",
  ],
  typeSpeed: 70,
  loop: true,
  backSpeed: 50,
  backDelay: 700,
});

// Function to handle key presses
function handleKeyPress(event) {
  if (
    event.key === "1" ||
    event.key === "2" ||
    event.key === "3" ||
    event.key === "4"
  ) {
    // Get the index of the key pressed ('1' corresponds to index 0, '2' to index 1, and '3' to index 2)
    const index = parseInt(event.key) - 1;

    const anchors = document.querySelectorAll(".link.body-links");

    if (index >= 0 && index < anchors.length) {
      anchors[index].click();
    }
  }
}

// Add the key press event listener to the document
document.addEventListener("keydown", handleKeyPress);

// Function to handle "Esc" key press
function handleEscKeyPress(event) {
  if (event.key === "Escape") {
    // Get a reference to the anchor tag
    const anchor = document.getElementById("name");

    if (anchor) {
      anchor.click();
    }
  }
}

// Add the key press event listener to the document
document.addEventListener("keydown", handleEscKeyPress);

// Function to handle "Back" anchor click
function handleBackAnchorClick() {
  // Get a reference to the anchor tag with the ID 'name'
  const anchor = document.getElementById("name");

  // Check if the anchor tag exists
  if (anchor) {
    // Simulate a click on the anchor tag
    anchor.click();
  }
}

// Add a click event listener to the "Back" anchor tag
document.addEventListener("keydown", function (event) {
  // Check if the key pressed is the "Enter" key (key code 13)
  if (event.key === "Escape") {
    // Call the function to handle the anchor click
    handleBackAnchorClick();
  }
});
//why is this not working?
