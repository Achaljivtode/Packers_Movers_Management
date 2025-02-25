import React, { useEffect, useState } from "react";
import { fetchAgents } from "../../services/api";
import { useNavigate } from "react-router-dom"; // Import for navigation

function SearchAgent() {
  const [search, setSearch] = useState("");
  const [agents, setAgents] = useState([]);
  const [filteredAgents, setFilteredAgents] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (search) {
      const filtered = agents.filter(
        (agent) =>
          agent.full_name.toLowerCase().includes(search.toLowerCase()) ||
          agent.city.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredAgents(filtered);
    } else {
      setFilteredAgents(agents);
    }
  };

  const handleAgentClick = (agentId) => {
    navigate(`/agent-detail/${agentId}`);
    // Redirect to agent details page
  };

  // Fetch orders when component loads
  useEffect(() => {
    fetchAgents()
      .then((data) => {
        setAgents(data);
        setFilteredAgents(data);
      })
      .catch(() => alert("Failed to load Agents"));
  }, []);

  useEffect(() => {
    const getAllAgents = async () => {
      try {
        const data = await fetchAgents();
        // console.log("Fetched Orders in React:", data); // Debugging log
        setAgents(data); // Ensure all orders are stored
      } catch (err) {
        alert("Failed to load orders");
      }
    };

    getAllAgents();
  }, []);
  return (
    <div className=" xl:w-[1300px] lg:w-[1000px] md:w-full mx-auto lg:mb-42">
      <div className=" flex lg:flex-row  md:w-full sm:w-full lg:w-3/4 mx-auto lg:mt-20 md:mt-10 mt-5 px-10">
        <p className=" font-semibold lg:block md:hidden hidden text-xl lg:w-1/4">
          Search Agent :{" "}
        </p>
        <div className=" w-full mx-auto lg:w-3/4">
          <input
            type="text"
            onKeyUp={(e) => setSearch(e.target.value)}
            className="border lg:w-4/5 md:w-4/5  w-3/4  px-5 py-2"
            placeholder="Search Agent"
          />
          <button
            onClick={handleSubmit}
            className=" lg:w-1/5 md:1/5 px-2 py-1 lg:px-5 lg:py-2 rounded-md hover:cursor-pointer hover:bg-orange-500 bg-orange-400 text-white font-bold "
          >
            Search
          </button>
        </div>
      </div>
      <div className=" grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 md:w-full sm:grid-cols-1 lg:w-3/4 mx-auto my-10">
        {filteredAgents.map((agent, index) => (
          <div
            key={index}
            className=" sm:w-3/4 md:w-3/4 mx-auto lg:w-full flex p-5"
          >
            <img
              src="/Resources/images/logo.jpg"
              alt=""
              className="w-[80px] h-[80px]"
            />
            <div className="ml-5 mx-auto">
              <a
                // href={`/agent-detail/${agent.id}`}
                onClick={() => handleAgentClick(agent.id)}
                className="text-xl text-blue-700 font-semibold my-1 hover:cursor-pointer"
              >
                {agent.full_name}
                <span>({agent.city})</span>
              </a>
              <p className="text-gray-500 text-md">Contact: {agent.mobile}</p>
              <p className="text-gray-500 text-md">Email: {agent.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchAgent;
