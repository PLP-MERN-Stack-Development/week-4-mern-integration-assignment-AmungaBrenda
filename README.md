# 📝 MERN Blog Application

Welcome to the **MERN Blog** – a full-stack web application built with **MongoDB**, **Express.js**, **React.js**, and **Node.js**. It allows users to create, view, edit, and delete blog posts with categories, authentication, and more.

---

## 📁 Project Structure

mern-blog/
├── client/ # React Frontend (Vite)
└── server/ # Node/Express Backend with MongoDB

yaml
Copy
Edit

---

## 🚀 Features

- 🧠 CRUD blog posts
- 🗂️ Categorize posts
- 🔐 User authentication (register & login)
- 🖼️ Upload featured images
- 🔍 Search & filter
- 💬 Comments
- 📄 Pagination
- ⚡ Optimistic UI updates

---

## ⚙️ Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/mern-blog.git
cd mern-blog
2️⃣ Server Setup (/server)
bash
Copy
Edit
cd server
npm install
cp .env.example .env  # Replace with your MongoDB URI
npm run dev
📌 Example .env:

ini
Copy
Edit
MONGO_URI=mongodb://localhost:27017/mernblog
JWT_SECRET=yourSecretKey
3️⃣ Client Setup (/client)
bash
Copy
Edit
cd client
npm install
npm run dev
📌 Make sure Vite proxy is set in vite.config.js:

js
Copy
Edit
server: {
  proxy: {
    '/api': 'http://localhost:5000'
  }
}
🌐 Routes Overview
📮 API Endpoints
Method	Route	Description
GET	/api/posts	Get all blog posts
GET	/api/posts/:id	Get a single post
POST	/api/posts	Create a new post
PUT	/api/posts/:id	Update a post
DELETE	/api/posts/:id	Delete a post
GET	/api/categories	Get all categories
POST	/api/categories	Create a new category

🛠 Tech Stack
🧠 MongoDB + Mongoose

🚂 Express.js

⚛️ React.js + Vite

🔧 Node.js

📦 Axios

🌐 React Router DOM

🔐 JWT + bcrypt

🗂️ Multer for file upload

🧪 Future Enhancements
🌈 Light/Dark Theme

📧 Email notifications

🧵 Rich text editor

🧠 Admin dashboard

🤝 Contributing
Want to contribute? Awesome! Follow these steps:

Fork the repo 🍴

Create a branch git checkout -b feature/feature-name

Commit changes 📝

Push to your branch git push origin feature-name

Create a Pull Request 🚀

🧑‍💻 Author
Built with ❤️ by Your AmungaBrenda

📄 License
MIT License © 2025

