import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Clear error message
    setError("");

    // Handle login logic (e.g., API call)
    console.log("Email:", email, "Password:", password);

    // Reset form after successful login (optional)
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-tr  flex items-center justify-center p-4">
        <div className="bg-zinc-800 rounded-2xl mb-28 shadow-lg p-8 w-auto max-w-md text-white">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide mb-6">
            Welcome to
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
              {" "}
              Fresher
            </span>
          </h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
                className="block w-full px-4 py-3 bg-zinc-700 text-white border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              Forgot Username or Password?
              <a
                className="text-orange-400 hover:text-orange-500 font-medium transition duration-300"
                href="https://wa.me/91808080808080?text=forgot+id+password"
              >
                <br />
                Contact Us
              </a>
            </p>
            <p className="text-zinc-400">Are you an Admin?</p>
            <a
              className="text-orange-400 hover:text-orange-500 font-medium transition duration-300"
              href="/adminlogin"
            >
              Admin Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
