# 🗒️ CipherNote-API

This is the backend API for a personal notes management system built with **Node.js**, **Express**, and **MongoDB**.

## 📦 Features

- User signup & login (with JWT)
- Secure note creation, reading, updating, and deletion
- Password hashing and input validation

## 🚀 Getting Started

1. Clone the repository  
2. Run `npm install`  
3. Create a `.env` file with:
   ```
   PORT=3000
   MONGO_URI=your_connection_string
   SECRETKEY=your_jwt_secret
   ```
4. Start the server with:  
   ```bash
   npm start
   ```

## 🔐 Protected Routes

All `/notes` routes require authentication via JWT (stored in cookies).

---

Made by **IMPANO Blessed Winner** 🚀
