
# 🧠 Mental Health Journal Web App

This is a full-fledged web application for recording mental health journals with dual user roles: **Patients** and **Psychiatrists**. Built using **HTML, CSS, JavaScript**, **Node.js**, **Express.js**, and **MongoDB**.

---

## 🚀 Features

- 🔐 User login and registration (with roles: Patient / Psychiatrist)
- 📘 Daily mood & journal entry system for patients
- 🧠 Automatically generated behavioral advice
- 🧾 Psychiatrist view for accessing patient logs
- 🗂️ MongoDB database integration

---

## 📦 Folder Structure

```
mental-health-app/
├── backend/              # Node.js + Express backend
│   ├── models/           # Mongoose data models
│   ├── routes/           # Auth and journal APIs
│   └── server.js         # Main server entry point
├── public/               # Frontend code
│   ├── index.html        # Login/Register page
│   ├── dashboard.html    # Patient/Psychiatrist dashboard
│   ├── style.css         # Stylesheet
│   └── script.js         # Frontend logic
```

---

## 🔧 Setup Instructions

### 1. 📥 Prerequisites

- [Node.js & npm](https://nodejs.org/)
- [MongoDB Community](https://www.mongodb.com/try/download/community) or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

### 2. 🚀 Run Backend

```bash
cd mental-health-app/backend
npm install
node server.js
```

If MongoDB is installed locally, it connects by default to:
```
mongodb://127.0.0.1:27017/mentalHealthJournal
```

> 📝 Change connection string in `server.js` if using MongoDB Atlas.

### 3. 🌐 Run Frontend

Open `mental-health-app/public/index.html` in your browser.

Or run a static server (optional):
```bash
cd mental-health-app/public
python3 -m http.server 8080
# Visit http://localhost:8080
```

---

## 👥 User Roles

### Patient:
- Can log in/register
- Submit daily journal entry
- Get automated advice

### Psychiatrist:
- Can view all entries of patients
- Analyze patterns and behavioral responses

---

## ⚙️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **Database:** MongoDB with Mongoose

---

## 📌 Future Improvements

- Use JWT for secure login
- Add password hashing with `bcrypt`
- Deploy on cloud platforms (Render/Vercel + MongoDB Atlas)
- Implement ML/NLP-based behavior models

---

## 👨‍💻 Author

Made for academic and wellness-based projects. Contributions welcome!

