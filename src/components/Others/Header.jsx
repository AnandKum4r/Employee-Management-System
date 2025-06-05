import React, { useState } from "react";
import { setLocalStorage } from "../../utilities/LocalStorage";

const Header = (props) => {
  // console.log("Header component rendered");

  // const [username, setUsername] = useState("");
  // if (!data) {
  //   setUsername("Admin");
  // } else {
  //   setUsername(data.name);
  // }

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", JSON.stringify({ role: "" }));
    props.changeUser("");

    // window.location.reload();
  };

  return (
    <div className="flex rounded-xl justify-between items-center bg-gray-900 p-4 text-white">
      <h1 className="text-xl font-semibold">
        Hello <br />{" "}
        <span className="text-2xl font-semibold">
          {props.data?.name || "Admin"}👋
        </span>
      </h1>
      <button
        onClick={logOutUser}
        className="cursor-pointer bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition duration-300"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
