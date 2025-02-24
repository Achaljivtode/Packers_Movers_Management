import React, { useState } from "react";
import { registerService } from "../../services/api";

const ServiceRegisterForm = () => {
  const [formData, setFormData] = useState({
    service_name: "",
    service_image: null,
    status: "",
    Description: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, service_image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.service_name ||
      !formData.status ||
      !formData.Description ||
      !formData.service_image
    ) {
      setError("All fields are required!");
      return;
    }

    setError("");
    setSuccessMessage("");

    const serviceData = new FormData();
    serviceData.append("service_name", formData.service_name);
    serviceData.append("service_image", formData.service_image);
    serviceData.append("status", formData.status);
    serviceData.append("Description", formData.Description);

    try {
      const response = await registerService(serviceData);
      // alert("Service Register Successfully");
      if (response.error) {
        setError(response.error);
        return;
      }
      // setSuccessMessage("Service registered successfully!");

      setFormData({
        service_name: "",
        service_image: null,
        status: "",
        Description: "",
      });

      document.getElementById("service_image").value = "";
    } catch (error) {
      setError(error.response?.data?.error || "Error registering service.");
      alert("Service Registration Failed.Please Try Again");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        action="#"
        method="post"
        className="px-5 mx-auto lg:w-xl md:w-full sm:w-full p-3 m-3"
      >
        <h3 className="text-center font-semibold text-xl">
          Register Your Service
        </h3>

        {error && <p className="text-red-500">{error}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}

        <div className="flex flex-row md:w-3/4 md:mx-auto my-7">
          <label htmlFor="service_name" className="w-2/5 font-medium">
            Service Name:
          </label>
          <input
            type="text"
            id="service_name"
            name="service_name"
            value={formData.service_name}
            onChange={handleChange}
            className="border-1  border-gray-400 w-3/5  ml-5 p-1 rounded-md"
            placeholder="Enter service name"
            required
          />
        </div>

        <div className="flex flex-row md:w-3/4 md:mx-auto my-5">
          <label htmlFor="service_image" className="w-2/5 font-medium">
            Service Image:
          </label>
          <input
            type="file"
            id="service_image"
            name="service_image"
            onChange={handleFileChange}
            className="border-1  border-gray-400 w-3/5  ml-5 p-1 rounded-md"
            required
          />
        </div>

        <div className="flex flex-row md:w-3/4 md:mx-auto my-5">
          <label htmlFor="status" className="w-2/5 font-medium">
            Status:
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border-1  border-gray-400 w-3/5  ml-5 p-1 rounded-md"
            required
          >
            <option value="">Select Status</option>
            <option value="Active">Active</option>
            <option value="Deactive">Deactive</option>
          </select>
        </div>

        <div className="flex flex-row md:w-3/4 md:mx-auto my-5">
          <label htmlFor="description" className="w-2/5 font-medium">
            Description:
          </label>
          <textarea
            id="Description"
            name="Description"
            value={formData.Description}
            onChange={handleChange}
            className="border-1  border-gray-400 w-3/5  ml-5 p-1 rounded-md"
            placeholder="Enter service description"
            required
          />
        </div>

        <div className="flex flex-row md:w-3/4 md:mx-auto my-5">
          <input
            type="submit"
            value="REGISTER SERVICE"
            className="border w-full bg-orange-400 text-white font-semibold p-2 rounded-md hover:cursor-pointer hover:bg-orange-500"
          />
        </div>
      </form>
    </div>
  );
};

export default ServiceRegisterForm;
