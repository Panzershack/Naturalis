-- User Table
CREATE TABLE User (
  user_id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- Seller Table
CREATE TABLE Seller (
  seller_id INT PRIMARY KEY AUTO_INCREMENT,
  seller_name VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- Order Table
CREATE TABLE Order (
  order_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  total_amount DECIMAL(10, 2) NOT NULL,
  email VARCHAR(255) NOT NULL,
  telephone VARCHAR(20) NOT NULL,
  payment_method VARCHAR(255) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES User(user_id)
);

-- Item Table
CREATE TABLE Item (
  item_id INT PRIMARY KEY AUTO_INCREMENT,
  item_name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  quantity_in_stock INT NOT NULL,
  item_type VARCHAR(255) NOT NULL,    --   indoor, outdoor, accessory
  seller_id INT,
  FOREIGN KEY (seller_id) REFERENCES Seller(seller_id)
);

-- Cart Table
CREATE TABLE Cart (
  cart_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  item_name VARCHAR(255) NOT NULL,
  item_type VARCHAR(255) NOT NULL,
  item_price DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES User(user_id)
);
