// Get the cart container element
const cartContainer = document.querySelector(".cart-container");

// Get the cart open button element
const cartOpenButton = document.querySelector(".cart-open-button");

// Get the cart close button element
const cartCloseButton = document.querySelector(".cart-close-button");

// Function to toggle the cart visibility
function toggleCart() {
  cartContainer.classList.toggle("cart-open");
}

// Event listener for the cart open button
cartOpenButton.addEventListener("click", toggleCart);

// Event listener for the cart close button
cartCloseButton.addEventListener("click", toggleCart);

// Hide the cart when the mouse is moved away from the viewport edge
window.addEventListener("mouseout", function (e) {
  if (e.clientY <= 0) {
    cartContainer.classList.remove("cart-open");
  }
});

// Get the navbar element
const navbar = document.querySelector("nav");

// Get the offset position of the navbar
const navbarOffsetTop = navbar.offsetTop;

// Function to handle the sticky navbar
function handleStickyNavbar() {
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Event listener for window scroll to handle the sticky navbar
window.addEventListener("scroll", handleStickyNavbar);
