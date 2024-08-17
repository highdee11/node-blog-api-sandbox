# Node.js Express API with Sequelize and MySQL

## Overview

This project is a Node.js RESTful API built using Express, Sequelize ORM, and MySQL as the database. The API provides endpoints for user management, article creation, comment management, and a rating system.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Installation

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/yourusername/your-repo-name.git](https://github.com/highdee11/node-blog-api-sandbox)
   cd main
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up the database:**

   - Ensure you have MySQL installed and running on your machine.
   - Create a MySQL database for this project.
   - Update the database configuration in the `core/config/db_config.js` file (see [Configuration](#configuration)).

4. **Run the migrations:**

   ```bash
   bash migration.sh
   ```

5. **Start the application:**

   ```bash
   nodemon server.js
   ```

## Configuration
Recommendation:
Create a `.env` file in the root of your project and configure the following environment variables:

```plaintext
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=yourdatabasename
DB_DIALECT=mysql
PORT=3000
JWT_SECRET=yourjwtsecret
```

## API Endpoints

### User Management

- Register a new user
- Login user

### Articles

- Create a new article
- Fetch all articles

### Comments

- Create a comment on an article

### Ratings

- Rate an article
- Rate a comment

## Technologies Used

- **Node.js**
- **Express.js**
- **MySQL**
- **Sequelize ORM**
- **JWT for Authentication**

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are welcome.

 
--- 
