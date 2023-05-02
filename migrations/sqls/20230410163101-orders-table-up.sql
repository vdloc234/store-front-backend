CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  status VARCHAR(10) NOT NULL,
  user_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES users (id)
);

INSERT INTO orders (status, user_id) VALUES ('pending', 1);
INSERT INTO orders (status, user_id) VALUES ('complete', 1);
INSERT INTO orders (status, user_id) VALUES ('complete', 1);