import React, { useState } from "react";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!username || !password) {
      setError("Please fill in both fields.");
      return;
    }

    // Clear error message
    setError("");

    // Handle login logic (e.g., API call)
    console.log("Admin Username:", username, "Admin Password:", password);

    // Reset form after submission (optional)
    setUsername("");
    setPassword("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr flex items-center justify-center p-4">
      <div className="bg-zinc-800 rounded-2xl mb-28 shadow-lg p-8 w-auto max-w-md text-white">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide mb-6">
          Admin
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {" "}
            Login
          </span>
        </h1>
        {error && (
          <p className="text-red-500 text-center mb-4 font-medium">{error}</p>
        )}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              className="block w-full px-4 py-3 bg-zinc-700 text-white border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-orange-400">
              <i className="fas fa-user"></i>
            </span>
          </div>
          <div className="relative">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="block w-full px-4 py-3 bg-zinc-700 text-white border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-orange-400">
              <i className="fas fa-lock"></i>
            </span>
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-6 text-white font-semibold rounded-lg shadow-md transition duration-300 bg-gradient-to-r from-orange-500 to-red-800 hover:from-orange-200 hover:to-orange-800"
          >
            Login
          </button>
        </form>
        <div className="mt-8 text-center">
          <p className="text-zinc-400">
            Having trouble logging in?
            <a
              className="text-orange-400 hover:text-orange-500 font-medium transition duration-300"
              href="https://wa.me/91808080808080?text=admin+login+help"
            >
              <br />
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
