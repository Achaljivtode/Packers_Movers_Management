import React, { useState, useEffect } from "react";
import { fetchServices } from "../../services/api";
import { Link } from "react-router-dom";

function Servicess() {
  const [services, setServices] = useState([]);
  const [inputService, setInputService] = useState("");

  useEffect(() => {
    const loadServices = async () => {
      const data = await fetchServices();
      setServices(data);
    };

    loadServices();
  }, []);

  return (
    <div className="mb-30">
      <div className=" flex lg:flex-row  md:w-full sm:w-full lg:w-3/4 mx-auto lg:mt-20 md:mt-10 mt-5 px-10">
        <p className=" font-semibold lg:block md:hidden hidden text-xl lg:w-1/4">
          Search Service :{" "}
        </p>
        <div className=" w-full mx-auto lg:w-3/4">
          <input
            type="text"
            onKeyUp={(e) => setInputService(e.target.value)}
            className="border rounded-md lg:w-4/5 md:w-4/5  w-3/4  px-5 py-2"
            placeholder="Search Service"
          />
          <button className=" lg:w-1/5 md:1/5 px-2 py-1 lg:px-5 lg:py-2 rounded-md hover:cursor-pointer hover:bg-orange-500 bg-orange-400 text-white font-bold ">
            Search
          </button>
        </div>
      </div>

      {/* Services Table */}
      <div className=" mt-10 mx-auto xl:w-[1300px] lg:w-[1000px]">
        <table className="border w-full">
          <thead className="border">
            <tr>
              <th className="border p-2 bg-orange-400 text-white text-xl font-bold">
                Id
              </th>
              {/* <th className="border p-2 bg-orange-400 text-white text-xl font-bold">
                Image
              </th> */}
              <th className="border p-2 bg-orange-400 text-white text-xl font-bold">
                Name
              </th>
              <th className="border p-2 bg-orange-400 text-white text-xl font-bold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {services
              .filter((service) =>
                service.service_name
                  .toLowerCase()
                  .includes(inputService.toLowerCase())
              )
              .map((service) => (
                <tr key={service.id}>
                  <td className="border p-2 text-center">{service.id}</td>
                  {/* <td className="border p-2 text-center">
                    <img
                      src={service.service_image}
                      alt={service.service_name}
                      className="w-16 h-16 mx-auto object-cover rounded-md"
                    />
                  </td> */}
                  <td className="border p-2 text-center">
                    {service.service_name}
                  </td>
                  <td className="border p-2 text-center">
                    <Link
                      to={`/service-detail/${service.id}`}
                      className="text-blue-600 font-semibold"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Servicess;
