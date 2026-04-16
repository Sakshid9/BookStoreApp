
-----

# 📚 BookStoreApp

A full-stack Bookstore application built using the **MERN** stack. This project features user authentication, a dynamic book display with categories, and a fully responsive interface.

## 🔗 Live Demo

**View the project live:** [https://bookstore.dubeysakshi.in/](https://bookstore.dubeysakshi.in/)

-----

## 📑 Table of Contents

  *[BookStoreApp](#-bookstoreapp)
  *[Live Demo](#-live-demo)
  * [Features](#-features)
  * [Tech Stack](#️-tech-stack)
  * [Project Structure](#-project-structure)
  * [Installation](#️-installation)
  * [API Endpoints](#-api-endpoints)
  * [Connect With Me](#-connect-with-me)

-----

## ✨ Features

  * **User Authentication:** Secure Signup and Login using `react-hook-form`.
  * **Dynamic Book Listing:** Fetched directly from MongoDB with a dedicated "Free Books" section.
  * **Protected Routes:** Secure access to the `/course` page for authenticated users only.
  * **Modern Design:** Sleek UI built with **Tailwind CSS** and **DaisyUI**.
  * **Dark Mode Support:** Toggle between light and dark themes seamlessly.
  * **Real-time Feedback:** Integrated **react-hot-toast** for user notifications.

-----

## 🛠️ Tech Stack

  * **Frontend:** React.js, Tailwind CSS, DaisyUI, Axios.
  * **Backend:** Node.js, Express.js.
  * **Database:** MongoDB Atlas.
  * **State Management:** React Context API (AuthProvider).

-----

## 📂 Project Structure

```text
BOOKSTOREAPP/
├── backend/           # Server-side logic
│   ├── controller/    # Request handlers
│   ├── model/         # Mongoose schemas
│   └── route/         # Express routes
├── frontend/          # Client-side React app
│   ├── src/           # Components, logic, & styles
│   └── public/        # Static assets
├── .gitignore         # Root git ignore file
└── README.md          # Documentation
```

-----

## ⚙️ Installation

### 1\. Clone the repository

```bash
git clone https://github.com/Sakshid9/BookStoreApp.git
cd BookStoreApp
```

### 2\. Backend Setup

1.  Go to backend: `cd backend`
2.  Install: `npm install`
3.  Add `.env` file with your `PORT` and `MongoDBURI`.
4.  Run: `npm start`

### 3\. Frontend Setup

1.  Go to frontend: `cd frontend`
2.  Install: `npm install`
3.  Run: `npm run dev`

-----

## 📡 API Endpoints

  * `GET /book` - Fetch all books.
  * `POST /user/signup` - User registration.
  * `POST /user/login` - User authentication.

-----

## 🤝 Connect With Me

Created by **Sakshi Dubey**

  * **GitHub:** [https://github.com/Sakshid9](https://github.com/Sakshid9)
  * **LinkedIn:** [https://www.linkedin.com/in/sakshid9/](https://www.linkedin.com/in/sakshid9/)

-----

