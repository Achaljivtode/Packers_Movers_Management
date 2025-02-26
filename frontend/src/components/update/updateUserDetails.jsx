// import { useState, useEffect } from "react";
// // import { fetchRolesChoices, registerUser } from "../../services/api";
// import { fetchUserProfile, updateUserProfile } from "../../services/api";

// function Register() {
//   useEffect(() => {
//     const loadUserData = async () => {
//       const userData = await fetchUserProfile();
//       if (userData) {
//         setFormData(userData); // Pre-fill form
//       }
//     };
//     loadUserData();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await updateUserProfile(formData);
//       if (response.id) {
//         setMessage("Profile updated successfully!");
//         alert("Profile updated successfully!");
//       } else {
//         setMessage(response.error || "Update failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Update Error:", error);
//       setMessage("An error occurred. Please try again.");
//     }
//   };

//   const role = localStorage.getItem("role");

//   const [choices, setChoices] = useState([]);
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     register_as: "customer",
//     password: "",
//     password_confirm: "",
//     full_name: "",
//     DOB: "",
//     mobile: "",
//     Nationality: "",
//     Address: "",
//     country: "",
//     state: "",
//     city: "",
//   });
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     const loadRoles = async () => {
//       const roles = await fetchRolesChoices();

//       setChoices(roles);
//     };
//     loadRoles();
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   //   const handleSubmit = async (e) => {
//   //     e.preventDefault();
//   //     try {
//   //       const response = await registerUser(formData);
//   //       //   console.log("API Response:", response);

//   //       if (response.id) {
//   //         setMessage("Registration successfull");
//   //         alert("Registration Successful!");
//   //       } else {
//   //         setMessage(
//   //           response.error || "Registration failed. please check your input"
//   //         );
//   //       }
//   //     } catch (error) {
//   //       console.error("Registration Error:", error);
//   //       setMessage("An error occured. Please try again");
//   //     }
//   //   };

//   return (
//     <div>
//       <div className=" flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
//         <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
//           {/* <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" /> */}
//           <h1 className="text-center text-3xl font-bold">Packers And Movers</h1>
//           <h2 className="mt-10 text-center text-xl font-semibold tracking-tight text-gray-900">
//             {role ? "Update Your Account" : "Create Your Account"}
//           </h2>
//         </div>

//         <div className=" mt-10 sm:mx-auto sm:w-full sm:max-w-5xl ">
//           <form
//             onSubmit={handleSubmit}
//             className=" space-y-6"
//             action="#"
//             method="POST"
//           >
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
//               {/* username */}
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm/6 font-medium text-gray-900"
//                 >
//                   username
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     type="text"
//                     name="username"
//                     id="username"
//                     value={formData.username}
//                     autoComplete="username"
//                     onChange={handleChange}
//                     required
//                     className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                   />
//                 </div>
//               </div>

//               {/* email */}
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm/6 font-medium text-gray-900"
//                 >
//                   Email address
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     value={formData.email}
//                     autoComplete="email"
//                     onChange={handleChange}
//                     required
//                     className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                   />
//                 </div>
//               </div>

//               {/* register as (user/admin) */}
//               <div>
//                 <label
//                   htmlFor="registerAs"
//                   className="block text-sm/6 font-medium text-gray-900"
//                 >
//                   Register As
//                 </label>
//                 <div className="mt-2">
//                   <select
//                     name="register_as"
//                     value={formData.register_as}
//                     onChange={handleChange}
//                     id="register_as"
//                     className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                   >
//                     <option value="">Select Role</option>
//                     {choices.map((choice, index) => (
//                       <option key={index} value={choice.value}>
//                         {choice.label}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               {/* Password */}
//               <div>
//                 <div className="flex items-center justify-between">
//                   <label
//                     htmlFor="password"
//                     className="block text-sm/6 font-medium text-gray-900"
//                   >
//                     Password
//                   </label>
//                 </div>
//                 <div className="mt-2">
//                   <input
//                     type="password"
//                     name="password"
//                     id="password"
//                     autoComplete="current-password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     required
//                     className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                   />
//                 </div>
//               </div>

//               {/* confPassword */}
//               <div>
//                 <div className="flex items-center justify-between">
//                   <label
//                     htmlFor="confpassword"
//                     className="block text-sm/6 font-medium text-gray-900"
//                   >
//                     Confirm Password
//                   </label>
//                 </div>
//                 <div className="mt-2">
//                   <input
//                     type="password"
//                     name="password_confirm"
//                     id="password_confirm"
//                     autoComplete="password_confirm"
//                     value={formData.password_confirm}
//                     onChange={handleChange}
//                     required
//                     className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                   />
//                 </div>
//               </div>

//               {/* name */}
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm/6 font-medium text-gray-900"
//                 >
//                   Full Name
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     type="text"
//                     name="full_name"
//                     id="full_name"
//                     autoComplete="full_name"
//                     value={formData.full_name}
//                     required
//                     onChange={handleChange}
//                     className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                   />
//                 </div>
//               </div>

//               {/* date of birth */}
//               <div>
//                 <label
//                   htmlFor="DOB"
//                   className="block text-sm/6 font-medium text-gray-900"
//                 >
//                   D.O.B
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     type="date"
//                     name="DOB"
//                     id="DOB"
//                     autoComplete="DOB"
//                     value={formData.DOB}
//                     required
//                     onChange={handleChange}
//                     className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                   />
//                 </div>
//               </div>

//               {/* Mobile Number */}
//               <div>
//                 <label
//                   htmlFor="number"
//                   className="block text-sm/6 font-medium text-gray-900"
//                 >
//                   Mobile Number{" "}
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     type="number"
//                     name="mobile"
//                     id="mobile"
//                     autoComplete="mobile"
//                     value={formData.mobile}
//                     onChange={handleChange}
//                     required
//                     className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                   />
//                 </div>
//               </div>

//               {/* Nationality */}
//               <div>
//                 <label
//                   htmlFor="nationality"
//                   className="block text-sm/6 font-medium text-gray-900"
//                 >
//                   Nationality{" "}
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     type="text"
//                     name="Nationality"
//                     id="Nationality"
//                     autoComplete="Nationality"
//                     value={formData.Nationality}
//                     onChange={handleChange}
//                     required
//                     className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                   />
//                 </div>
//               </div>

//               {/* country */}
//               <div>
//                 <label
//                   htmlFor="country"
//                   className="block text-sm/6 font-medium text-gray-900"
//                 >
//                   Country{" "}
//                 </label>

//                 <div className="mt-2">
//                   <input
//                     type="text"
//                     name="country"
//                     id="country"
//                     autoComplete="country"
//                     value={formData.country}
//                     onChange={handleChange}
//                     required
//                     className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                   />
//                 </div>
//               </div>

//               {/* State dropdown */}
//               <div>
//                 <label
//                   htmlFor="state"
//                   className="block text-sm/6 font-medium text-gray-900"
//                 >
//                   State{" "}
//                 </label>

//                 <div className="mt-2">
//                   <input
//                     type="text"
//                     name="state"
//                     id="state"
//                     autoComplete="state"
//                     value={formData.state}
//                     onChange={handleChange}
//                     required
//                     className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                   />
//                 </div>
//               </div>

//               {/* city dropdown */}
//               <div>
//                 <label
//                   htmlFor="city"
//                   className="block text-sm/6 font-medium text-gray-900"
//                 >
//                   City
//                 </label>

//                 <div className="mt-2">
//                   <input
//                     type="text"
//                     name="city"
//                     id="city"
//                     autoComplete="city"
//                     value={formData.city}
//                     onChange={handleChange}
//                     required
//                     className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                   />
//                 </div>
//               </div>

//               {/* Address */}
//               <div>
//                 <label
//                   htmlFor="address"
//                   className="block text-sm/6 font-medium text-gray-900"
//                 >
//                   Address
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     type="text"
//                     name="Address"
//                     id="Address"
//                     autoComplete="Address"
//                     value={formData.Address}
//                     onChange={handleChange}
//                     required
//                     className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* register button */}
//             <div>
//               <button
//                 type="submit"
//                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 {role ? "Update" : "Register"}
//               </button>
//             </div>
//           </form>
//           {message && <p className="text-green-300 text-center">{message}</p>}

//           {!role && (
//             <p className="mt-10 text-center text-sm/6 text-gray-500">
//               Already a member?
//               <a
//                 href="#"
//                 className="font-semibold text-indigo-600 hover:text-indigo-500"
//               >
//                 Login
//               </a>
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;

import { useState, useEffect } from "react";
import { fetchUserProfile, updateUserProfile } from "../../services/api";

function Update() {
  const role = localStorage.getItem("role");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    register_as: "customer",
    full_name: "",
    DOB: "",
    mobile: "",
    Nationality: "",
    Address: "",
    country: "",
    state: "",
    city: "",
  });

  const [message, setMessage] = useState("");

  // Fetch user profile data on page load
  useEffect(() => {
    const loadUserData = async () => {
      const userData = await fetchUserProfile();
      if (userData) {
        setFormData((prevState) => ({
          ...prevState,
          ...userData, // Merge API response into state
          password: "", // Don't pre-fill password fields
          password_confirm: "",
        }));
      }
    };
    loadUserData();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (Update Profile)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Remove password fields if they are empty (so they don't get sent in API request)
    const updatedData = { ...formData };
    if (!updatedData.password) delete updatedData.password;
    if (!updatedData.password_confirm) delete updatedData.password_confirm;

    try {
      const response = await updateUserProfile(updatedData);
      if (response.id) {
        setMessage("Profile updated successfully!");
        alert("Profile updated successfully!");
      } else {
        setMessage(response.error || "Update failed. Please try again.");
      }
    } catch (error) {
      console.error("Update Error:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="text-center text-3xl font-bold">Packers And Movers</h1>
          <h2 className="mt-10 text-center text-xl font-semibold tracking-tight text-gray-900">
            {role ? "Update Your Account" : "Create Your Account"}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-5xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Username */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-900"
                >
                  Username
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={formData.username}
                    autoComplete="username"
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-gray-300 focus:outline-indigo-600 sm:text-sm"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900"
                >
                  Email Address
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    autoComplete="email"
                    onChange={handleChange}
                    required
                    disabled
                    className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-gray-900 sm:text-sm"
                  />
                </div>
              </div>

              {/* Register As */}
              <div>
                <label
                  htmlFor="register_as"
                  className="block text-sm font-medium text-gray-900"
                >
                  Register As
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="register_as"
                    value={formData.register_as}
                    disabled
                    className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-gray-900 sm:text-sm"
                  />
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label
                  htmlFor="full_name"
                  className="block text-sm font-medium text-gray-900"
                >
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="full_name"
                    id="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 sm:text-sm"
                  />
                </div>
              </div>

              {/* Mobile */}
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-900"
                >
                  Mobile Number
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="mobile"
                    id="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 sm:text-sm"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label
                  htmlFor="Address"
                  className="block text-sm font-medium text-gray-900"
                >
                  Address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="Address"
                    id="Address"
                    value={formData.Address}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Update Button */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Update
              </button>
            </div>
          </form>

          {/* Display message */}
          {message && <p className="text-green-500 text-center">{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default Update;
