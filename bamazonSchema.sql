
DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,4) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

SELECT * FROM products;