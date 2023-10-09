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

// Get references to the search input and live search results container
const blogSearchInput = document.getElementById("blog-search-input");
const liveSearchResults = document.getElementById("live-search-results");

// Define the content of your blog for searching (you can replace this with the actual blog content)
const blogContent = {
  title: "Minecraft Live 2023 (Expectations)",
  content:
    "Minecraft Live 2023 is an annual live event hosted by Mojang Studios...",
  url: "/blogs/mc-live-2023.html",
};

// Function to perform the live blog search
function performLiveBlogSearch(query) {
  // Clear previous search results
  liveSearchResults.innerHTML = "";

  // Check if the query is empty or consists of whitespace
  if (!query.trim()) {
    return;
  }

  // Check if the query matches the blog title or content
  if (
    blogContent.title.toLowerCase().includes(query.toLowerCase()) ||
    blogContent.content.toLowerCase().includes(query.toLowerCase())
  ) {
    const resultItem = document.createElement("li");
    const resultLink = document.createElement("a");
    resultLink.href = blogContent.url;
    resultLink.textContent = blogContent.title;
    resultItem.appendChild(resultLink);
    liveSearchResults.appendChild(resultItem);
  } else {
    const noResultsItem = document.createElement("li");
    noResultsItem.textContent = "No results found in this blog.";
    liveSearchResults.appendChild(noResultsItem);
  }
}

// Event listener for input changes in the blog search input
blogSearchInput.addEventListener("input", function () {
  const query = blogSearchInput.value;
  performLiveBlogSearch(query);
});

// Event listener for the Backspace key
blogSearchInput.addEventListener("keydown", function (event) {
  if (event.key === "Backspace" && !blogSearchInput.value.trim()) {
    // Clear the search results when Backspace is pressed and the search input is empty
    liveSearchResults.innerHTML = "";
  }
});
