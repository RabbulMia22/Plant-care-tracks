import React, { useContext } from "react";
import { AuthContext } from '../context/AuthProvider';
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Login() {
  const { loginWithEmail, loginWithGoogle, setUser } = useContext(AuthContext);
   const navigate = useNavigate();
   const location = useLocation();
   console.log("Login - Current Location:", location);
   console.log('abcd', navigate);
    const from = location.state?.from?.pathname || '/';

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginWithEmail(email, password)
      .then((result) => {
        console.log("Login - User logged in:", result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Login - Error logging in:", error);
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        console.log("Google Login - User:", result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Google Login Error:", error);
      });
  };

  return (
    <div className="min-h-screen bg-emerald-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-emerald-600 mb-6 text-center">
          Login to PlantCare 🌿
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
              required
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
              name="password"
              required
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-500 mb-2">Or login with</p>
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg py-2 shadow hover:bg-gray-100 transition"
          >
            <FaGoogle />
            <span className="text-sm text-gray-700 font-medium">Sign in with Google</span>
          </button>
        </div>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-emerald-600 hover:underline font-medium"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
