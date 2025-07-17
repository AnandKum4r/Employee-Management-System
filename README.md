# 🧑‍💼 Employee Management System (EMS)

🔗 **Live Demo:** [https://ems-kappa-six-78.vercel.app/](https://ems-kappa-six-78.vercel.app/)

## 📌 Introduction

The **Employee Management System** is a modern web-based application built using **React + Vite** for managing employees and their tasks. It supports two roles: **Admin** and **Employee**.

- 👨‍💼 **Admin** can: Assign tasks to employees (with Title, Date, Description, Category)
- 👩‍💻 **Employees** can: View their assigned tasks and update their status (New, Accepted, Completed, Failed).

The application uses **localStorage** for managing login and employee/task data.

---
##  Login Email & Passwaord
- 👨‍💼 **Admin** Email : admin@example.com , Password: 123
- 👩‍💻 **Employees**
- Email : employee1@example.com, employee2@example.com , employee3@example.com , employee4@example.com , employee5@example.com , Password : 123

---

## ✨ Features

### 🔐 Authentication
- Separate **login/signup** for Admin and Employees.
- Logged-in user data is stored in **localStorage**.

### 🧑‍💻 Admin Dashboard
- View all employees
- Assign tasks to employees (with Title, Date, Description, Category)

### 👩‍💼 Employee Dashboard
- View assigned tasks
- Update task status (Accepted, Completed, Failed)
- Track total tasks per status (New, Completed, etc.)

---

## 🚀 Technologies Used

- ⚛️ React (Functional Components, Hooks)
- ⚡ Vite (for fast development)
- 💨 Tailwind CSS (for modern UI)
- 🌐 LocalStorage (for storing users and tasks)
- 🔁 React Router DOM (for page routing)
- 🧠 React Hooks (useState, useEffect)
---

## 📥 Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/AnandKum4r/Employee-Management-System.git
   cd employee-management-system
   ```

2. Install dependencies:
    ```bash
    npm install
    ```
## Usage
1. Start the development server:
    ```bash
    npm run dev
    ```

2. Open in browser:
    [http://localhost:3000](http://localhost:3000)

---
