import { useState, useEffect } from "react";
import { fetchAgents } from "../../services/api";

function SearchAgents() {
  const [agents, setAgents] = useState([]);

  // Fetch orders when component loads
  useEffect(() => {
    fetchAgents()
      .then(setAgents)
      .catch(() => alert("Failed to load Agents"));
  }, []);

  useEffect(() => {
    const getAllAgents = async () => {
      try {
        const data = await fetchAgents();
        console.log("Fetched Orders in React:", data); // Debugging log
        setAgents(data); // Ensure all orders are stored
      } catch (error) {
        alert("Failed to load orders");
      }
    };

    getAllAgents();
  }, []);

  return (
    <div>
      <h1 className="text-orange-400 text-2xl font-semibold text-center my-10">
        ALL AGENTS
      </h1>

      <table className="mx-auto lg:w-[1400px] md:w-full sm:w-full">
        <thead>
          <tr>
            <th className="border p-2 font-normal bg-orange-400 text-white">
              USERNAME
            </th>
            <th className="border p-2 font-normal bg-orange-400 text-white">
              MOBILE
            </th>
            <th className="border p-2 font-normal bg-orange-400 text-white">
              EMAIL
            </th>
          </tr>
        </thead>
        <tbody>
          {agents.length === 0 ? (
            <tr>
              <td colSpan="6" className="border p-2 text-center">
                No Agents available.
              </td>
            </tr>
          ) : (
            agents.map((agent) => (
              <tr key={agent.id}>
                <td className="border p-2">{agent.username}</td>
                <td className="border p-2">{agent.mobile}</td>
                <td className="border p-2">{agent.email}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default SearchAgents;
