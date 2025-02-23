import { useState, useEffect } from "react";
import { fetchOrders, updateOrder } from "../../services/api";
const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders()
      .then(setOrders)
      .catch(() => alert("Failed to load orders"));
  }, []);

  const handleUpdate = async (orderId, status) => {
    try {
      await updateOrder(orderId, status);
      alert(`order ${status} successsfully !`);

      setOrders((prev) =>
        prev.map((order) =>
          order.id === orderId ? { ...order, status } : order
        )
      );
    } catch {
      alert("Error updating order");
    }
  };

  return (
    <div>
      <h2>Manage Orders</h2>
      {orders.length === 0 ? (
        <p>No orders available.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id}>
            <p>Pickup: {order.pickup_location}</p>
            <p>Drop: {order.drop_location}</p>
            <p>Price: {order.price}</p>
            <p>Status: {order.status}</p>
            {order.status === "Pending" && (
              <>
                <button onClick={() => handleUpdate(order.id, "Accepted")}>
                  Accept
                </button>
                <button onClick={() => handleUpdate(order.id, "Rejected")}>
                  Reject
                </button>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
};
export default ManageOrders;
