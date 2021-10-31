import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://aqueous-dawn-65962.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  function cancel(id) {
    fetch(`https://aqueous-dawn-65962.herokuapp.com/delete/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          const remainingOrders = orders.filter((order) => order._id !== id);
          setOrders(remainingOrders);
        } else {
          alert("Something went wrong!!");
        }
      });
  }
  return (
    <div>
      <h1 className="text-center">Orders</h1>
      <table className="table table-hover w-100">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Buyer</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
            <th scope="col">Cancellation</th>
            <th scope="col">Confirmation</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            const { img, _id, title, price, name, email, status } = order;
            return (
              <tr key={_id}>
                <td>
                  <img width="50px" src={img} alt="" />
                </td>
                <td>
                  <h6>{title?.slice(0, 15)}</h6>
                </td>
                <td>{price}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{status}</td>
                <td>
                  <button
                    onClick={() => cancel(_id)}
                    className="btn btn-danger"
                  >
                    Cancel
                  </button>
                </td>
                <td>
                  <button className="btn btn-success">Confirm</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
