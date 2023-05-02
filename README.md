# Storefront Backend Project

## Set up and connect to Database:

### Setup

- Open Command Prompt
- Switch to postgres terminal: `psql -U postgres postgres`
- Create user and database with the following commands:
  - `CREATE USER manager WITH PASSWORD 'password123!';`
  - `CREATE DATABASE order_management;`
  - `CREATE DATABASE order_management_test;`
  - `\c order_management`
  - `GRANT ALL PRIVILEGES ON DATABASE order_management TO manager;`
  - `\c order_management_test`
  - `GRANT ALL PRIVILEGES ON DATABASE order_management_test TO manager;`
- In the root folder, install packages by command: `npm install`.

### Connect to the database

- Start API: `npm start`.
- Test API: `npm run test`.

## Environment Variables (set these value in .env file)

- POSTGRES_HOST=localhost
- POSTGRES_DB=order_management
- POSTGRES_DB_TEST=order_management_test
- POSTGRES_USER=manager
- POSTGRES_PASSWORD=password123!
- BCRYPT_PASSWORD=secret_password_001
- SALT_ROUNDS=10
- TOKEN_SECRET=secret_random2255

## Ports:

- Server (localhost): 3000
- Database: 5432
