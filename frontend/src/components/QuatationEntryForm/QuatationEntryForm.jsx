// import React from "react";

// import { useState } from "react";
// import { placeOrder } from "../../services/api";

// const QuatationEntryForm = () => {
//   const [formData, setFormData] = useState({
//     select_service: "",
//     pickup_location: "",
//     drop_location: "",
//     Reference: "",
//     details_of_service: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await placeOrder(formData);
//       alert("Order placed successfully!");
//       setFormData({
//         select_service: "",
//         pickup_location: "",
//         drop_location: "",
//         Reference: "",
//         details_of_service: "",
//       });
//     } catch {
//       alert("Error placing order. Check console for details.");
//     }
//   };

//   return (
//     <div>
//       <form
//         onSubmit={handleSubmit}
//         action="#"
//         method="post"
//         className=" lg:w-2/4 lg:my-19 md:w-full md:my-10 p-5 mx-auto"
//       >
//         <div className="flex flex-row mt-5">
//           <label
//             htmlFor="service"
//             className=" w-2/5 flex lg:justify-end md:justify-end sm:justify-start pr-3"
//           >
//             Select Service:{" "}
//           </label>
//           <select
//             name="service"
//             id="service"
//             className="border-1 border-gray-400 rounded-sm w-3/5 p-2"
//           >
//             <option value="">Select Servicer</option>
//             <option value="Office Shifting">Office Shifting</option>
//             <option value="House Shifting">House Shifting</option>
//             <option value="Car Shifting">Car Shifting</option>
//             <option value="Bike Shifting">Bike Shifting</option>
//             <option value="Packages Shifting">Packages Shifting</option>
//           </select>
//         </div>
//         <div className="flex flex-row mt-5">
//           <label
//             htmlFor="from-address"
//             className="w-2/5 flex lg:justify-end md:justify-end sm:justify-start pr-3"
//           >
//             Shift From Address:{" "}
//           </label>
//           <input
//             id="pickup_location"
//             name="pickup_location"
//             type="text"
//             onChange={handleChange}
//             value={formData.pickup_location}
//             className="border-1 border-gray-400 rounded-sm w-3/5 p-2"
//             placeholder="Shift From Address"
//           />
//         </div>
//         <div className="flex flex-row mt-5">
//           <label
//             htmlFor="to-address"
//             className=" w-2/5 flex lg:justify-end md:justify-end sm:justify-start pr-3"
//           >
//             Shift To Address:{" "}
//           </label>
//           <input
//             id="drop_location"
//             name="drop_location"
//             type="text"
//             onChange={handleChange}
//             value={formData.drop_location}
//             className="border-1 border-gray-400 rounded-sm w-3/5 p-2"
//             placeholder="Shift To Address"
//           />
//         </div>
//         <div className="flex flex-row mt-5">
//           <label
//             htmlFor="to-address"
//             className=" w-2/5 flex lg:justify-end md:justify-end sm:justify-start pr-3"
//           >
//             Reference
//           </label>
//           <input
//             id="Reference"
//             name="Reference"
//             type="text"
//             onChange={handleChange}
//             value={formData.Reference}
//             className="border-1 border-gray-400 rounded-sm w-3/5 p-2"
//             placeholder="Shift To Address"
//           />
//         </div>
//         <div className="flex flex-row mt-5">
//           <label
//             htmlFor="to-address"
//             className=" w-2/5 flex lg:justify-end md:justify-end sm:justify-start pr-3"
//           >
//             Details of Service
//           </label>
//           <input
//             id="details_of_service"
//             name="details_of_service"
//             type="text"
//             onChange={handleChange}
//             value={formData.details_of_service}
//             className="border-1 border-gray-400 rounded-sm w-3/5 p-2"
//             placeholder="Shift To Address"
//           />
//         </div>
//         {/* <div className="flex flex-row mt-5">
//           <label
//             htmlFor="service-date"
//             className=" w-2/5 flex lg:justify-end md:justify-end sm:justify-start pr-3"
//           >
//             Service Date
//           </label>
//           <input
//             id="service-date"
//             name="service-date"
//             type="date"
//             className="border-1 border-gray-400 rounded-sm w-3/5 p-2"
//           />
//         </div>
//          */}
//         <div className="mt-5 text-end">
//           <input
//             type="submit"
//             value="SUBMIT"
//             className="w-full bg-orange-400 p-2 rounded-md text-white text-xl font-semibold"
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default QuatationEntryForm;
import React, { useState, useEffect } from "react";
import { fetchServices, placeOrder } from "../../services/api";

const QuatationEntryForm = () => {
  const [services, setServices] = useState([]); // Store fetched services
  const [formData, setFormData] = useState({
    select_service: "", // Store selected service ID
    pickup_location: "",
    drop_location: "",
    Reference: "",
    details_of_service: "",
  });

  // Fetch services when the component loads
  useEffect(() => {
    const loadServices = async () => {
      const serviceData = await fetchServices();
      setServices(serviceData);
    };
    loadServices();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await placeOrder(formData);
      alert("Order placed successfully!");
      setFormData({
        select_service: "",
        pickup_location: "",
        drop_location: "",
        Reference: "",
        details_of_service: "",
      });
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Error placing order. Check console for details.");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="lg:w-2/4 lg:my-19 md:w-full md:my-10 p-5 mx-auto"
      >
        {/* Select Service Dropdown */}
        <div className="flex flex-row mt-5">
          <label className="w-2/5 flex lg:justify-end md:justify-end sm:justify-start pr-3">
            Select Service:
          </label>
          <select
            name="select_service"
            value={formData.select_service}
            // onChange={handleChange}
            onChange={(e) =>
              setFormData({
                ...formData,
                select_service: Number(e.target.value),
              })
            }
            className="border-1 border-gray-400 rounded-sm w-3/5 p-2"
            required
          >
            <option value="">Select Service</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.service_name}
              </option>
            ))}
          </select>
        </div>

        {/* Pickup Location */}
        <div className="flex flex-row mt-5">
          <label className="w-2/5 flex lg:justify-end md:justify-end sm:justify-start pr-3">
            Shift From Address:
          </label>
          <input
            name="pickup_location"
            type="text"
            value={formData.pickup_location}
            onChange={handleChange}
            className="border-1 border-gray-400 rounded-sm w-3/5 p-2"
            placeholder="Shift From Address"
            required
          />
        </div>

        {/* Drop Location */}
        <div className="flex flex-row mt-5">
          <label className="w-2/5 flex lg:justify-end md:justify-end sm:justify-start pr-3">
            Shift To Address:
          </label>
          <input
            name="drop_location"
            type="text"
            value={formData.drop_location}
            onChange={handleChange}
            className="border-1 border-gray-400 rounded-sm w-3/5 p-2"
            placeholder="Shift To Address"
            required
          />
        </div>

        {/* Reference (Optional) */}
        <div className="flex flex-row mt-5">
          <label className="w-2/5 flex lg:justify-end md:justify-end sm:justify-start pr-3">
            Reference:
          </label>
          <input
            name="Reference"
            type="text"
            value={formData.Reference}
            onChange={handleChange}
            className="border-1 border-gray-400 rounded-sm w-3/5 p-2"
            placeholder="Enter reference (optional)"
          />
        </div>

        {/* Details of Service */}
        <div className="flex flex-row mt-5">
          <label className="w-2/5 flex lg:justify-end md:justify-end sm:justify-start pr-3">
            Details of Service:
          </label>
          <textarea
            name="details_of_service"
            value={formData.details_of_service}
            onChange={handleChange}
            className="border-1 border-gray-400 rounded-sm w-3/5 p-2"
            placeholder="Enter service details"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-5 text-end">
          <input
            type="submit"
            value="SUBMIT"
            className="w-full bg-orange-400 p-2 rounded-md text-white text-xl font-semibold"
          />
        </div>
      </form>
    </div>
  );
};

export default QuatationEntryForm;
