// Login.jsx

import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate= useNavigate()
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#09071a] via-[#0e0b22] to-[#120920]">

      <div className="w-full max-w-md bg-[#0a1727]/80 backdrop-blur-xl border border-[#1d2736] rounded-3xl p-8 shadow-2xl">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">
            Welcome Back 🍦
          </h1>

          <p className="text-[#7b8794] mt-3 text-sm">
            Login to continue your ChillZone experience
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-5">

          {/* Email */}
          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-[#1f2937] text-white outline-none focus:border-cyan-400 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-[#1f2937] text-white outline-none focus:border-cyan-400 transition"
            />
          </div>

          {/* Remember */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-400">
              <input type="checkbox" />
              Remember me
            </label>

            <button
              type="button"
              className="text-cyan-400 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-3 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold hover:scale-[1.02] transition-all duration-300"
            oncli
          >
            Login
          </button>

        </form>

        {/* Bottom */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Don’t have an account?
          <button className="text-cyan-400 cursor-pointer hover:underline ml-1"  onClick={()=>navigate("/register")}>
            Register
          </button>
        </p>

      </div>

    </div>
  )
}

export default Login