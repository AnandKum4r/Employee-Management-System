localStorage.clear(); // Clear local storage to avoid conflicts during development

const employees = [
  {
    id: 1,
    name: "Anjali Mehta",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Complete report",
        taskDescription: "Finish the quarterly report",
        taskDate: "2025-06-01",
        category: "Reporting",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update website",
        taskDescription: "Revise homepage layout",
        taskDate: "2025-05-25",
        category: "Web Development",
      },
    ],
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 2,
    name: "Rohan Verma",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fixing",
        taskDescription: "Resolve login issue",
        taskDate: "2025-05-30",
        category: "Development",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write documentation",
        taskDescription: "Add API usage guide",
        taskDate: "2025-06-02",
        category: "Documentation",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Client call",
        taskDescription: "Discuss UI feedback",
        taskDate: "2025-05-28",
        category: "Client Communication",
      },
    ],
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 3,
    name: "Priya Nair",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Backend cleanup",
        taskDescription: "Refactor unused code",
        taskDate: "2025-06-01",
        category: "Backend",
      },
    ],
    taskStats: {
      active: 1,
      newTask: 0,
      completed: 0,
      failed: 0,
    },
  },
  {
    id: 4,
    name: "Amit Sharma",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design login page",
        taskDescription: "Create Figma layout",
        taskDate: "2025-06-01",
        category: "UI/UX",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Meeting with HR",
        taskDescription: "Discuss project allocation",
        taskDate: "2025-05-26",
        category: "HR",
      },
    ],
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1,
    },
  },
  {
    id: 5,
    name: "Sneha Iyer",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Onboard new intern",
        taskDescription: "Assign workspace and introduce tools",
        taskDate: "2025-05-29",
        category: "Operations",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Deploy app",
        taskDescription: "Push to production server",
        taskDate: "2025-06-01",
        category: "Deployment",
      },
    ],
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
];

// This file contains mock data for employees and admin users.
// It can be used for testing purposes in a local environment without a backend.

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
