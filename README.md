# Express + Sequelize + PostgreSQL API

This is a RESTful API built with **Express.js**, **Sequelize ORM**, and **PostgreSQL**. It includes CRUD operations for two models:

- **Users**
- **Subjects**

---

## 🛠 Technologies Used

- Node.js
- Express.js
- Sequelize (ORM)
- PostgreSQL
- dotenv

---

## 📁 Project Structure

```

express-sequelize-app/
├── config/
│   └── db.config.js          # DB connection config
├── controllers/
│   ├── user.controller.js    # User CRUD logic
│   └── subject.controller.js # Subject CRUD logic
├── models/
│   ├── index.js              # Sequelize initialization
│   ├── user.model.js         # User model
│   └── subject.model.js      # Subject model
├── routes/
│   ├── user.routes.js        # User routes
│   └── subject.routes.js     # Subject routes
├── .env                      # Environment variables
├── index.js                  # Entry point
└── package.json              # NPM config

````

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/express-sequelize-postgres.git
cd express-sequelize-postgres
````

### 2. Install dependencies

```bash
npm install
```

### 3. Set up PostgreSQL database

Make sure PostgreSQL is running and create a database named:

```
MERN
```

### 4. Configure environment variables

Create a `.env` file in the root directory:

```env
DB_NAME=Your DB Name
DB_USER=Your DB User Name
DB_PASSWORD=Your DB Password
DB_HOST=Your DB host
DB_PORT=Your DB Port
```

---

## 📡 Run the App

```bash
npm run dev
```

> The server will start at:
> [http://localhost:3000](http://localhost:3000)

---

## 🔌 API Endpoints

### Users

| Method | Endpoint         | Description    |
| ------ | ---------------- | -------------- |
| POST   | `/api/users`     | Create a user  |
| GET    | `/api/users`     | Get all users  |
| GET    | `/api/users/:id` | Get user by ID |
| PUT    | `/api/users/:id` | Update user    |
| DELETE | `/api/users/:id` | Delete user    |

### Subjects

| Method | Endpoint            | Description       |
| ------ | ------------------- | ----------------- |
| POST   | `/api/subjects`     | Create a subject  |
| GET    | `/api/subjects`     | Get all subjects  |
| GET    | `/api/subjects/:id` | Get subject by ID |
| PUT    | `/api/subjects/:id` | Update subject    |
| DELETE | `/api/subjects/:id` | Delete subject    |

---

## 📌 Notes

* Sequelize will auto-create the tables if they don’t exist on first run.
* Use tools like **Postman** or **Insomnia** to test the API.

---
