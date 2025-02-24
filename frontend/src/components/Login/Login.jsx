// import from 'react'

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/api"; // Import API call

function Login() {
  const navigate = useNavigate(); // For redirection
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData); // Call API
      console.log("Login Success:", response.data);

      if (response.token) {
        localStorage.setItem("token", response.token); // Save JWT token
        localStorage.setItem("role", response.user.register_as); // Save user role

        // Redirect based on role
        if (response.user.register_as === "admin") {
          console.log("admin");
          navigate("/admin-dashboard");
        } else if (response.user.register_as === "agent") {
          console.log("agent");
          navigate("/agent-dashboard");
        } else if (response.user.register_as === "customer") {
          console.log("customer");
          navigate("/customer-dashboard");
        }
      } else {
        setMessage(response.error || "Invalid credentials ! please try agsain");
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      setMessage(
        error.response?.data?.error || "Invalid Credentials! Please try again."
      );
    }
  };

  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" /> */}
          <h1 className="text-center text-4xl font-semibold">
            Packers and Movers
          </h1>
          <h2 className="mt-10 text-center text-xl font-semibold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
          {message && <p className="text-center text-red-500">{message}</p>}

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?
            <a
              href="/register"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              {" "}
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
