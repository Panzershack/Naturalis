// Cart functionality

const cartItemsElement = document.getElementById("cart-items");
const cartTotalPriceElement = document.getElementById("cart-total-price");
const cartPanel = document.getElementById("cart-panel");
const clearCartButton = document.getElementById("clear-cart-button");

let cartItems = [];

function addToCart(item) {
  cartItems.push(item);
  renderCartItems();
  updateCartTotal();
}

function renderCartItems() {
  cartItemsElement.innerHTML = "";
  cartItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.name + " - " + item.price.toFixed(2) + "$"; //edited here added toFIxed
    cartItemsElement.appendChild(li);
  });
}

function updateCartTotal() {
  let total = 0;
  cartItems.forEach((item) => {
    total += item.price;
  });
  cartTotalPriceElement.textContent = total.toFixed(2) + "$";
}

function clearCart() {
  cartItems = [];
  renderCartItems();
  updateCartTotal();
}

clearCartButton.addEventListener("click", clearCart);

// Sample items
const item1 = { name: "Indoor Item 1", price: 12.0 };
const item2 = { name: "Indoor Item 2", price: 10.0 };
const item3 = { name: "Indoor Item 3", price: 15.0 };
const item4 = { name: "Indoor Item 4", price: 12.0 };
const item5 = { name: "Indoor Item 5", price: 11.0 };
const item6 = { name: "Indoor Item 6", price: 8.0 };

// Add event listeners to the buttons
document.querySelectorAll(".add-to-cart-button").forEach((button) => {
  button.addEventListener("click", () => {
    const itemBox = button.parentElement.parentElement;
    const item = {
      name: itemBox.querySelector("p").textContent,
      price: parseFloat(itemBox.querySelector(".price").textContent),
    };
    addToCart(item);
    cartPanel.style.display = "block";
  });
});

// Cart Visibility
const cartToggle = document.getElementById("cart-toggle");

cartToggle.addEventListener("click", () => {
  if (cartPanel.style.display === "none") {
    cartPanel.style.display = "block";
  } else {
    cartPanel.style.display = "none";
  }
});
