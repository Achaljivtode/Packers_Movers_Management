import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";

import { FaShareSquare } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { fetchAllFeedback } from "../services/api";

function FeedBackDetailsPage() {
  const navigate = useNavigate();
  //   const [customer, setCustomer] = useState();
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const getAllFeedbackData = async () => {
      try {
        const data = await fetchAllFeedback();
        setFeedbacks(data);
      } catch (error) {
        console.error("Failed to fetch feedback data", error);
      }
    };

    getAllFeedbackData();
  }, []);

  return (
    <div>
      <Header />
      <h1 className="text-center bg-gray-300 py-3 text-3xl text-orange-400 font-bold">
        Feedback Report
      </h1>
      <div className=" mx-auto w-3/4 my-10">
        <h2 className="text-xl font-semibold mb-1">All Feedback Reports</h2>
        <hr />
      </div>
      <div className="border w-3/4 mx-auto mb-30">
        <table className="border w-full">
          <thead className="border bg-orange-400 text-white">
            <tr>
              <th className="p-3 text-xl border border-orange-500">ID</th>
              <th className="p-3 text-xl border border-orange-500">NAME</th>
              <th className="p-3 text-xl border border-orange-500">EMAIL</th>
              <th className="p-3 text-xl border border-orange-500">RATING</th>
              <th className="p-3 text-xl border border-orange-500">ACTION</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {feedbacks.map((feedback) => (
              <tr key={feedback.id}>
                {/* id here */}
                <td className=" border p-2">{feedback.id}</td>

                {/* name here */}
                <td className=" border p-2">{feedback.full_name}</td>

                {/* email here */}
                <td className=" border p-2">{feedback.email}</td>

                {/* rating here */}
                <td className=" border p-2">{feedback.select_rating}</td>

                {/* action here */}
                <td className="p-2">
                  <div className="flex flex-row  justify-around">
                    <FaShareSquare
                      onClick={() =>
                        navigate(`/feedback-details/${feedback.id}`)
                      }
                      className="text-2xl hover:cursor-pointer text-blue-500"
                    />
                    <MdDeleteForever className="text-3xl hover:cursor-pointer text-red-500" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default FeedBackDetailsPage;
