CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(40) NOT NULL,
  price INTEGER NOT NULL,
  category VARCHAR(50)
);

INSERT INTO products (name, price, category) VALUES ('Pencil', '2', 'Office');
INSERT INTO products (name, price, category) VALUES ('Notebook', '5', 'Office');
INSERT INTO products (name, price, category) VALUES ('Apple', '1', 'Food');
INSERT INTO products (name, price, category) VALUES ('Tomato', '1', 'Food');