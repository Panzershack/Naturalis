// Dummy cart items
const cartItems = [
  {
    productName: "Product A",
    productPrice: 19.99,
    productImage: "productA.jpg",
  },
  {
    productName: "Product B",
    productPrice: 29.99,
    productImage: "productB.jpg",
  },
];

// Display cart items and calculate total price
const cartItemsContainer = document.getElementById("cartItems");
let totalPrice = 0;

cartItems.forEach((item) => {
  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");

  const itemImage = document.createElement("img");
  itemImage.src = item.productImage;
  itemImage.alt = item.productName;
  itemImage.classList.add("product-image");

  const itemDetails = document.createElement("div");
  itemDetails.classList.add("item-details");

  const itemName = document.createElement("p");
  itemName.textContent = item.productName;

  const itemPrice = document.createElement("p");
  itemPrice.textContent = `Price: $${item.productPrice.toFixed(2)}`;

  const itemQuantity = document.createElement("p");
  itemQuantity.textContent = `Quantity: ${item.quantity}`;

  const itemTotal = document.createElement("p");
  const total = item.productPrice * item.quantity;
  itemTotal.textContent = `Total: $${total.toFixed(2)}`;

  totalPrice += total;

  itemDetails.appendChild(itemName);
  itemDetails.appendChild(itemPrice);
  itemDetails.appendChild(itemQuantity);
  itemDetails.appendChild(itemTotal);

  cartItem.appendChild(itemImage);
  cartItem.appendChild(itemDetails);

  cartItemsContainer.appendChild(cartItem);
});

const totalPriceElement = document.getElementById("totalPrice");
totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;

// Checkout form submission
const checkoutForm = document.getElementById("checkoutForm");

checkoutForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
  const email = document.getElementById("emailInput").value;
  const firstName = document.getElementById("firstNameInput").value;
  const lastName = document.getElementById("lastNameInput").value;
  const addressLine1 = document.getElementById("addressLine1Input").value;
  const addressLine2 = document.getElementById("addressLine2Input").value;
  const telephone = document.getElementById("telephoneInput").value;
  const paymentMethod = document.querySelector(
    'input[name="paymentMethod"]:checked'
  ).value;

  // Submit form or perform necessary actions
});
