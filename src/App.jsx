import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utilities/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState("");
  const [loggedInUserData, setLoggedInUserData] = useState("");
  const authData = useContext(AuthContext);

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("loggedInUser");
  //   if (loggedInUser) {
  //     const userData = JSON.parse(loggedInUser);
  //     setUser(userData.role);
  //     setLoggedInUserData(userData.data);
  //   }
  // }, []);

  const handleLogin = (email, password) => {
    setLocalStorage();
    const { employees, admin } = getLocalStorage();

    // ✅ Check if the user is an admin
    if (
      admin &&
      admin[0] &&
      email === admin[0].email &&
      password === admin[0].password
    ) {
      setUser("admin");
      setLoggedInUserData(admin[0]);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: admin[0] })
      );
    } else {
      // ✅ Check if the user is an employee
      const employee = employees.find(
        (emp) => emp.email === email && emp.password === password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("Invalid email or password");
      }
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user == "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : user == "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
