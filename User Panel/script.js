window.addEventListener("DOMContentLoaded", () => {
  const orderContainer = document.getElementById("orderContainer");
  const cartPanel = document.getElementById("cart-panel");
  const cartToggle = document.getElementById("cart-toggle");
  const cartItemsList = document.getElementById("cart-items");
  const cartTotalPrice = document.getElementById("cart-total-price");
  const buyNowButton = document.getElementById("buy-now-button");
  const clearCartButton = document.getElementById("clear-cart-button");

  // Dummy data for user orders
  const userOrders = [
    {
      productName: "Product A",
      productPrice: 19.99,
      productImage: "productA.jpg",
      paymentMethod: "Credit Card",
    },
    {
      productName: "Product B",
      productPrice: 29.99,
      productImage: "productB.jpg",
      paymentMethod: "PayPal",
    },
  ];

  // Dummy data for cart items
  let cartItems = [
    {
      productName: "Product A",
      productPrice: 19.99,
      quantity: 1,
    },
  ];

  // Display user orders
  userOrders.forEach((order) => {
    const orderCard = document.createElement("div");
    orderCard.classList.add("order-card");

    const orderTitle = document.createElement("h2");
    orderTitle.textContent = "Order Details";

    const orderProduct = document.createElement("p");
    orderProduct.textContent = `Product Name: ${order.productName}`;

    const orderPrice = document.createElement("p");
    orderPrice.textContent = `Product Price: $${order.productPrice}`;

    const orderImage = document.createElement("img");
    orderImage.src = order.productImage;
    orderImage.alt = order.productName;
    orderImage.classList.add("product-image");

    const orderDetails = document.createElement("div");
    orderDetails.classList.add("order-details");

    const paymentMethod = document.createElement("span");
    paymentMethod.classList.add("payment-method");
    paymentMethod.textContent = `Payment Method: ${order.paymentMethod}`;

    orderDetails.appendChild(paymentMethod);
    orderCard.appendChild(orderTitle);
    orderCard.appendChild(orderProduct);
    orderCard.appendChild(orderPrice);
    orderCard.appendChild(orderImage);
    orderCard.appendChild(orderDetails);
    orderContainer.appendChild(orderCard);
  });

  // Toggle cart panel
  cartToggle.addEventListener("click", () => {
    cartPanel.classList.toggle("show-cart");
  });

  // Display cart items
  function displayCartItems() {
    cartItemsList.innerHTML = "";
    let totalPrice = 0;

    cartItems.forEach((item) => {
      const cartItem = document.createElement("li");
      cartItem.textContent = `${item.productName} - $${item.productPrice} x ${item.quantity}`;
      cartItemsList.appendChild(cartItem);
      totalPrice += item.productPrice * item.quantity;
    });

    cartTotalPrice.textContent = `$${totalPrice.toFixed(2)}`;
  }

  displayCartItems();

  // Add item to cart
  function addToCart(item) {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.productName === item.productName
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push({ ...item, quantity: 1 });
    }

    displayCartItems();
  }

  // Buy Now button
  buyNowButton.addEventListener("click", () => {
    alert("Thank you for your purchase!");
  });

  // Clear Cart button
  clearCartButton.addEventListener("click", () => {
    cartItems = [];
    displayCartItems();
  });
});
