import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { fetchFeedbackByUser } from "../services/api";

function CustomerFeedBackPage() {
  const { id } = useParams(); // Get the user ID from URL
  const [customerFeedbacks, setCustomerFeedbacks] = useState([]);

  useEffect(() => {
    const getCustomerFeedback = async () => {
      try {
        const feedbacks = await fetchFeedbackByUser(id); // Fetch feedback for a specific user
        setCustomerFeedbacks(feedbacks);
      } catch (error) {
        console.error("Failed to fetch customer feedback", error);
      }
    };
    getCustomerFeedback();
  }, [id]);

  // Extract user details from the first feedback entry (if available)
  const userName =
    customerFeedbacks.length > 0 ? customerFeedbacks[0].full_name : "N/A";
  const userEmail =
    customerFeedbacks.length > 0 ? customerFeedbacks[0].email : "N/A";
  const userContact =
    customerFeedbacks.length > 0 ? customerFeedbacks[0].mobile : "N/A";
  const userAddress =
    customerFeedbacks.length > 0 ? customerFeedbacks[0].Address : "N/A";

  return (
    <div>
      <Header />
      <h1 className="bg-gray-300 py-4 text-3xl text-orange-400 font-bold text-center">
        User Feedbacks
      </h1>

      <div className="w-3/4 mx-auto mb-20">
        <h2 className="text-xl font-semibold">Customer Details</h2>
        <hr />
        <table className="border mt-5">
          <tbody>
            <thead>
              <tr>
                <th className="border bg-orange-400 text-white p-3 text-xl">
                  userName
                </th>
                <th className="border bg-orange-400 text-white p-3 text-xl">
                  Email
                </th>
                <th className="border bg-orange-400 text-white p-3 text-xl">
                  Contact
                </th>
                <th className="border bg-orange-400 text-white p-3 text-xl">
                  Address
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 text-center p-4 font-semibold">
                  {userName}
                </td>
                <td className="border border-gray-300 text-center p-4 font-semibold">
                  {userEmail}
                </td>
                <td className="border border-gray-300 text-center p-4 font-semibold">
                  {userContact}
                </td>
                <td className="border border-gray-300 text-center p-4 font-semibold">
                  {userAddress}
                </td>
              </tr>
            </tbody>
          </tbody>
        </table>
      </div>

      <div className="w-3/4 mx-auto mb-20">
        <h2 className="text-xl font-semibold">Feedback History</h2>
        <hr />
        {customerFeedbacks.length > 0 ? (
          <table className="w-full border mt-5">
            <thead>
              <tr>
                <th className="border bg-orange-400 text-white p-3 text-xl">
                  Date
                </th>
                <th className="border bg-orange-400 text-white p-3 text-xl">
                  Rating
                </th>
                <th className="border bg-orange-400 text-white p-3 text-xl">
                  Feedback
                </th>
              </tr>
            </thead>
            <tbody>
              {customerFeedbacks.map((feedback) => (
                <tr key={feedback.id}>
                  <td className="border border-gray-300 text-center p-4">
                    {feedback.created_at}
                  </td>
                  <td className="border border-gray-300 text-center p-4">
                    {feedback.select_rating}
                  </td>
                  <td className="border border-gray-300 text-center p-4">
                    {feedback.feedback}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-xl text-red-500">
            No feedback found for this customer.
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default CustomerFeedBackPage;
