// import React from "react";

// function Quatation() {
//   return (
//     <div>
//       <h1 className="text-orange-400 text-2xl font-semibold text-center my-10">
//         ALL QUATATION REPORT
//       </h1>

//       <table className=" mx-auto lg:w-[1000px] md:w-full sm:w-full">
//         <thead>
//           <tr className="">
//             <th className="border p-2 font-normal bg-orange-400 text-white">
//               ID
//             </th>
//             <th className="border p-2 font-normal bg-orange-400 text-white">
//               Customer Name
//             </th>
//             <th className="border p-2 font-normal bg-orange-400 text-white">


import { useState, useEffect } from "react";
import { fetchOrders, updateOrder } from "../../services/api";

function Quotation() {
  const [orders, setOrders] = useState([]);

  // Fetch orders when component loads
  useEffect(() => {
    fetchOrders()
      .then(setOrders)
      .catch(() => alert("Failed to load orders"));
  }, []);

  useEffect(() => {
    const getAllOrders = async () => {
      try {
        const data = await fetchOrders();
        console.log("Fetched Orders in React:", data); // Debugging log
        setOrders(data); // Ensure all orders are stored
      } catch (error) {
        alert("Failed to load orders");
      }
    };

    getAllOrders();
  }, []);

  // Handle order status update
  const handleUpdate = async (orderId, status) => {
    try {
      await updateOrder(orderId, status);
      alert(`Order ${status} successfully!`);

      // Update state after successful update
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
      <h1 className="text-orange-400 text-2xl font-semibold text-center my-10">
        ALL QUOTATION REPORT
      </h1>

      <table className="mx-auto lg:w-[1000px] md:w-full sm:w-full">
        <thead>
          <tr>
            <th className="border p-2 font-normal bg-orange-400 text-white">
              ID
            </th>
            <th className="border p-2 font-normal bg-orange-400 text-white">
              Service Name
            </th>
            <th className="border p-2 font-normal bg-orange-400 text-white">
              Pickup
            </th>
            <th className="border p-2 font-normal bg-orange-400 text-white">
              Drop
            </th>
            <th className="border p-2 font-normal bg-orange-400 text-white">
              Date
            </th>
            {/* <th className="border p-2 font-normal bg-orange-400 text-white">
              Reference
            </th>
            <th className="border p-2 font-normal bg-orange-400 text-white">
              Details of Service
            </th> */}

            <th className="border p-2 font-normal bg-orange-400 text-white">
              Status
            </th>
            <th className="border p-2 font-normal bg-orange-400 text-white">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan="6" className="border p-2 text-center">
                No orders available.
              </td>
            </tr>
          ) : (
            orders.map((order) => (
              <tr key={order.id}>
                <td className="border p-2">{order.id}</td>
                <td className="border p-2">{order.select_service}</td>
                <td className="border p-2">{order.pickup_location}</td>
                <td className="border p-2">{order.drop_location}</td>
                {/* <td className="border p-2">{order.Reference}</td> */}
                <td className="border p-2">{order.created_at}</td>
                {/* <td className="border p-2">{order.details_of_service}</td> */}
                <td className="border p-2">{order.status}</td>
                <td className="border p-2">
                  {order.status === "Pending" && (
                    <>
                      <button
                        className="bg-green-500 text-white p-1 mx-1"
                        onClick={() => handleUpdate(order.id, "Accepted")}
                      >
                        Accept
                      </button>
                      <button
                        className="bg-red-500 text-white p-1 mx-1"
                        onClick={() => handleUpdate(order.id, "Rejected")}
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Quotation;
