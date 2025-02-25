import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchServices } from "../services/api";
import { fetchServiceById } from "../services/api";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function ServiceDetailsPage() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getServiceDetails = async () => {
      console.log("Fetching services by Id ...");
      const selectedService = await fetchServiceById(id);
      console.log("Fetched Service:", selectedService); // Debugging
      console.log("Service ID from URL:", id);

      //   const selectedService = services.find((s) => s.id === parseInt(id));

      //   console.log("Matched Service:", selectedService);

      setService(selectedService);
      setLoading(false);
    };

    getServiceDetails();
  }, [id]);

  if (loading) {
    return <p className="text-center text-lg text-gray-500">Loading...</p>;
  }

  if (!service) {
    return (
      <p className="text-center text-lg text-gray-500">service not found</p>
    );
  }

  return (
    <div>
      <Header />
      <h1 className="text-3xl font-bold p-5 bg-gray-300 text-orange-400 text-center">
        {service.service_name}
      </h1>
      <div>
        <div className=" w-2/4 mx-auto mt-15 mb-15">
          <h1 className=" text-2xl font-semibold">Service Details</h1>
          <hr className=" mx-auto" />
        </div>
        <table className="border w-3/6 lg:mb-45 mx-auto text-center">
          <thead>
            <tr>
              <th className="border p-2 bg-orange-400 text-white text-xl">
                Column
              </th>
              <th className="border p-2 bg-orange-400 text-white text-xl">
                Data
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-4 bg-gray-200 font-bold">
                Id
              </td>
              <td className="border border-gray-300 p-4 bg-gray-200 text-lg text-gray-600">
                {service.id}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 bg-gray-50 font-bold">
                Name
              </td>
              <td className="border border-gray-300 p-4 bg-gray-50 text-lg text-gray-600">
                {service.service_name}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 bg-gray-200 font-bold">
                Description
              </td>
              <td className="border border-gray-300 p-4 bg-gray-200 text-lg text-gray-600">
                {service.Description}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 bg-gray-50 font-bold">
                Image
              </td>
              <td className="border border-gray-300 p-4 bg-gray-50 text-lg text-gray-600">
                <img
                  src={service.service_image}
                  alt={service.service_name}
                  className="w-40 h-40 object-cover mx-auto rounded-md"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <Footer />
      </div>
    </div>
  );
}

export default ServiceDetailsPage;
