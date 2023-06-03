window.addEventListener("DOMContentLoaded", () => {
  const addProductForm = document.getElementById("addProductForm");
  const addProductButton = document.getElementById("addProductButton");
  const orderContainer = document.getElementById("orderContainer");

  addProductButton.addEventListener("click", () => {
    if (addProductForm.style.display === "none") {
      addProductForm.style.display = "block";
    } else {
      addProductForm.style.display = "none";
    }
  });

  addProductForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const productName = document.getElementById("productNameInput").value;
    const productPrice = document.getElementById("productPriceInput").value;
    const productImage = document.getElementById("productImageInput").value;

    // logic to add the product to the backend or data storage

    // Clear form inputs
    document.getElementById("productNameInput").value = "";
    document.getElementById("productPriceInput").value = "";
    document.getElementById("productImageInput").value = "";

    // Hide the form

    addProductForm.style.display = "none";
  });

  // Dummy data for orders
  const orders = [
    {
      username: "John Doe",
      address: "123 Main St",
      telephone: "555-1234",
      paymentMethod: "Credit Card",
    },
    {
      username: "Jane Smith",
      address: "456 Elm St",
      telephone: "555-5678",
      paymentMethod: "PayPal",
    },
  ];

  // Display orders
  orders.forEach((order) => {
    const orderCard = document.createElement("div");
    orderCard.classList.add("order-card");

    const orderTitle = document.createElement("h2");
    orderTitle.textContent = "Order Details";

    const orderUsername = document.createElement("p");
    orderUsername.textContent = `Username: ${order.username}`;

    const orderAddress = document.createElement("p");
    orderAddress.textContent = `Address: ${order.address}`;

    const orderTelephone = document.createElement("p");
    orderTelephone.textContent = `Telephone: ${order.telephone}`;

    const orderDetails = document.createElement("div");
    orderDetails.classList.add("order-details");

    const paymentMethod = document.createElement("span");
    paymentMethod.classList.add("payment-method");
    paymentMethod.textContent = `Payment Method: ${order.paymentMethod}`;

    orderDetails.appendChild(paymentMethod);
    orderCard.appendChild(orderTitle);
    orderCard.appendChild(orderUsername);
    orderCard.appendChild(orderAddress);
    orderCard.appendChild(orderTelephone);
    orderCard.appendChild(orderDetails);
    orderContainer.appendChild(orderCard);
  });
});
