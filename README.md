# 🧑‍💼 Employee Management System (EMS)

🔗 **Live Demo:** [https://ems-kappa-six-78.vercel.app/](https://ems-kappa-six-78.vercel.app/)

## 📌 Introduction

The **Employee Management System** is a modern web-based application built using **React + Vite** for managing employees and their tasks. It supports two roles: **Admin** and **Employee**.

- 👨‍💼 **Admin** can: Assign tasks to employees (with Title, Date, Description, Category)
- 👩‍💻 **Employees** can: View their assigned tasks and update their status (New, Accepted, Completed, Failed).

The application uses **localStorage** for managing login and employee/task data.

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

## 📸 Screenshots

### 🔐 Login Page
![Login] <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/ffd4c10e-6ed4-44b1-ad28-08cf5a95b992" />

### 🧑‍💼 Admin Dashboard
![Admin Dashboard] <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/7b453e5b-4e7f-4a7c-820c-2988064b57db" />

### 👩‍💻 Employee Dashboard
![Employee Dashboard] <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/f8ef7181-d0cc-486d-9d4b-421b48dc9772" />

## 📥 Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/employee-management-system.git
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

## 🚀 Technologies Used

- ⚛️ React (Functional Components, Hooks)
- ⚡ Vite (for fast development)
- 💨 Tailwind CSS (for modern UI)
- 🔒 SweetAlert2 (for alerts and confirmation dialogs)
- 🌐 LocalStorage (for storing users and tasks)
- 🔁 React Router DOM (for page routing)

---

