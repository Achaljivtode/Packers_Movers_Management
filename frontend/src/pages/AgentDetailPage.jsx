import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { fetchAgentDetails } from "../services/api";

function AgentDetailPage() {
  const { id } = useParams(); // Get agent ID from the URL
  const [agent, setAgent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getAgentDetails = async () => {
      try {
        const data = await fetchAgentDetails(id);
        console.log("Agent Data:", data);
        setAgent(data);
      } catch (err) {
        setError("Failed to load agent details.");
      } finally {
        setLoading(false);
      }
    };

    getAgentDetails();
  }, [id]);

  if (loading) return <p className="text-center mt-5">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div>
      <Header />
      <h1 className="bg-gray-300 text-center text-4xl text-orange-400 font-bold p-5">
        Agent Details
      </h1>

      <div className="px-5">
        <table className=" 2xl:w-2/4 xl:w-3/4 lg:w-3/4 md:w-3/4   w-full my-10 mx-auto">
          <thead>
            <tr>
              <th className="border bg-orange-400 text-white text-xl p-3">
                Column
              </th>
              <th className="border bg-orange-400 text-white text-xl p-3">
                Data
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 text-center bg-gray-200 text-lg font-semibold  p-2 py-4">
                Name
              </td>
              <td className="border border-gray-300 text-center bg-gray-200 text-md  p-2 py-4">
                {agent?.full_name}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 text-center bg-gray-50 text-lg font-semibold  p-2 py-4">
                contact
              </td>
              <td className="border border-gray-300 text-center bg-gray-50 text-md  p-2 py-4">
                {agent?.mobile}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 text-center bg-gray-200 text-lg font-semibold  p-2 py-4">
                email
              </td>
              <td className="border border-gray-300 text-center bg-gray-200 text-md  p-2 py-4">
                {agent?.email}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 text-center bg-gray-50 text-lg font-semibold  p-2 py-4">
                Address
              </td>
              <td className="border border-gray-300 text-center bg-gray-50 text-md  p-2 py-4">
                {agent?.Address}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 text-center bg-gray-200 text-lg font-semibold  p-2 py-4">
                City
              </td>
              <td className="border border-gray-300 text-center bg-gray-200 text-md  p-2 py-4">
                {agent?.city}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 text-center bg-gray-50 text-lg font-semibold  p-2 py-4">
                State
              </td>
              <td className="border border-gray-300 text-center bg-gray-50 text-md  p-2 py-4">
                {agent?.state}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default AgentDetailPage;
