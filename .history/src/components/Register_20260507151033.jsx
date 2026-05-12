import React from 'react'

const Register = () => {
  return (
    <div className="flex items-center justify-center    px-4 py-5">

      {/* Form Container */}
      <div className="w-full max-w-sm bg-[#0a1727] border border-[#1f2937] rounded-2xl p-4 shadow-2xl">

        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">
            Join ChillZone 🍨
          </h1>

          <p className="text-[#7b8794] mt-2 text-sm">
            Create your account
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4">

          {/* Full Name */}
          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-2 rounded-xl bg-[#111827] border border-[#1f2937] text-white outline-none focus:border-purple-400 transition-all duration-300"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-xl bg-[#111827] border border-[#1f2937] text-white outline-none focus:border-cyan-400 transition-all duration-300"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Password
            </label>

            <input
              type="password"
              placeholder="Create password"
              className="w-full px-3 py-2 rounded-xl bg-[#111827] border border-[#1f2937] text-white outline-none focus:border-pink-400 transition-all duration-300"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm password"
              className="w-full px-3 py-2 rounded-xl bg-[#111827] border border-[#1f2937] text-white outline-none focus:border-yellow-400 transition-all duration-300"
            />
          </div>

          {/* Terms */}
          <label className="flex items-center gap-2 text-sm text-gray-400">
            <input type="checkbox" className="accent-cyan-400" />
            I agree to Terms
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-2 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-400 text-white font-semibold hover:scale-[1.02] transition-all duration-300"
          >
            Create Account
          </button>

        </form>

        {/* Bottom */}
        <p className="text-center text-sm text-gray-400 mt-5">
          Already have an account?
          <span className="text-cyan-400 cursor-pointer hover:underline ml-1">
            Login
          </span>
        </p>

      </div>

    </div>
  )
}

export default Register