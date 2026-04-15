
---

# 📚 Bookstore MERN Application

A full-stack Bookstore application built using the **MERN** stack (MongoDB, Express, React, Node.js). This project features a dynamic book display, user authentication, and a fully responsive design.

## 🔗 Live Demo
**View the live website here:** [https://bookstore.dubeysakshi.in/](https://bookstore.dubeysakshi.in/)

---

## 🚀 Features
* **User Authentication:** Secure Signup and Login using `react-hook-form` and API integration.
* **Dynamic Data:** Fetches books directly from MongoDB and filters them (e.g., "Free" category slider).
* **Protected Routes:** Restricted access to specific pages (like `/course`) for logged-in users.
* **Modern UI:** Designed with **Tailwind CSS** and **DaisyUI** for a sleek, responsive experience.
* **Toast Notifications:** Interactive feedback using `react-hot-toast`.
* **Dark Mode:** Built-in support for light and dark themes.

---

## 🛠️ Tech Stack
* **Frontend:** React.js, Tailwind CSS, DaisyUI, Axios
* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas
* **State Management:** React Context API (AuthProvider)
* **Form Handling:** React Hook Form

---

## 📂 Project Structure

```text
BOOKSTOREAPP/
├── backend/           # Node/Express API
│   ├── controller/    # Logic for books and users
│   ├── model/         # Mongoose Schemas
│   └── route/         # API Endpoints
├── frontend/          # React Vite App
│   ├── src/           # Components & Logic
│   └── public/        # Static assets
├── .gitignore         # Root ignore file
└── README.md          # Project documentation
```

---

## ⚙️ Local Installation & Setup

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd BOOKSTOREAPP
```

### 2. Backend Setup
1.  Navigate to folder: `cd backend`
2.  Install dependencies: `npm install`
3.  Create a `.env` file and add your MongoDB connection string:
    ```env
    PORT=4001
    MongoDBURI=your_mongodb_atlas_link
    ```
4.  Start server: `npm start` (or `nodemon index.js`)

### 3. Frontend Setup
1.  Navigate to folder: `cd frontend`
2.  Install dependencies: `npm install`
3.  Start React app: `npm run dev`

---

## 📡 API Endpoints
* `GET /book` - Retrieve all books.
* `POST /user/signup` - Register a new account.
* `POST /user/login` - Authenticate existing users.

---

## 📝 License
This project is open-source and available under the **MIT License**.

---

**Happy Coding!** 🚀