import React, { useEffect, useState } from "react";

const Overview = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div>
      <h1 className="text-center">Overview</h1>
      <h2>Total Order For Review: {orders.length}</h2>
    </div>
  );
};

export default Overview;
