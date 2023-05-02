CREATE TABLE order_products (
  id SERIAL PRIMARY KEY, 
  order_id INTEGER,
  FOREIGN KEY (order_id) REFERENCES orders (id),
  product_id INTEGER,
  FOREIGN KEY (product_id) REFERENCES products (id),
  quantity INTEGER NOT NULL
  );

INSERT INTO order_products (order_id, product_id, quantity) VALUES (1, 1, 210);
INSERT INTO order_products (order_id, product_id, quantity) VALUES (2, 2, 310);