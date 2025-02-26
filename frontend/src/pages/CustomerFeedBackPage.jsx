import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { fetchAllFeedback } from "../services/api";

function CustomerFeedBackPage() {
  const { id } = useParams();
  const [customerFeedback, setCustomerFeedback] = useState(null);

  useEffect(() => {
    const getCustomerFeedback = async () => {
      try {
        const allFeedbacks = await fetchAllFeedback();

        console.log("All Feedbacks from API:", allFeedbacks);
        const filteredFeedbacks = allFeedbacks.filter(
          (feedback) => Number(feedback.user) === Number(id)
        );
        if (filteredFeedbacks.length > 0) {
          setCustomerFeedback(filteredFeedbacks[0]); // Store first feedback
        } else {
          setCustomerFeedback(null); // No feedback found
        }
      } catch (error) {
        console.error("Failed to fetch customer feedback", error);
      }
    };
    getCustomerFeedback();
  }, [id]);
  return (
    <div>
      <Header />
      <h1 className="bg-gray-300 py-4 text-3xl text-orange-400 font-bold text-center">
        Feedback Detail
      </h1>

      <div className="w-3/4 mx-auto my-20">
        <h2 className="text-xl mb-1 text-semibold">
          Feedback for Customer ID: {id}
        </h2>
        <hr />
      </div>

      <div className="w-3/4 mx-auto mb-20">
        {customerFeedback ? (
          <table className="w-full border">
            <thead>
              <tr>
                <th className="border bg-orange-400 text-white p-3 text-xl">
                  COLUMN
                </th>
                <th className="border bg-orange-400 text-white p-3 text-xl">
                  DATA
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 text-center p-4 font-semibold">
                  Name
                </td>
                <td className="border border-gray-300 text-center p-4 ">
                  {customerFeedback.full_name}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 bg-gray-200 text-center p-4 font-semibold">
                  Email
                </td>
                <td className="border border-gray-300 bg-gray-200 text-center p-4 ">
                  {customerFeedback.email}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 text-center p-4 font-semibold">
                  Rating
                </td>
                <td className="border border-gray-300 text-center p-4 ">
                  {customerFeedback.select_rating}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 bg-gray-200 text-center p-4 font-semibold">
                  Feedback
                </td>
                <td className="border border-gray-300 bg-gray-200 text-center p-4 ">
                  {customerFeedback.feedback}
                </td>
              </tr>
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
