CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_name VARCHAR(60) NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  password VARCHAR(255) NOT NULL
  );

INSERT INTO users (user_name, first_name, last_name, password) VALUES ('locvd', 'loc', 'vuong danh', '$2y$10$vUXTTVP16phC3GF6QJNIWuFXtkYicy0xVsciI9S72rugx5Ya11aBG');