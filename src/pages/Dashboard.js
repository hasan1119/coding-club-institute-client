import React, { useState } from "react";
import Cart from "./Cart.js";
import Profile from "./Profile.js";

const Dashboard = () => {
  const [current, setCurrent] = useState("Profile");
  function profileHandler(e) {
    setCurrent(e.target.value);
  }
  function cartHandler(e) {
    setCurrent(e.target.value);
  }

  return (
    <div>
      <div className="d-flex my-2 justify-content-center">
        <input onClick={profileHandler} type="button" value="Profile" />
        <input onClick={cartHandler} type="button" value="Cart" />
      </div>

      {(current === "Profile" && <Profile></Profile>) ||
        (current === "Cart" && <Cart></Cart>)}
    </div>
  );
};

export default Dashboard;
