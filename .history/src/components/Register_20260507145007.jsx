import React from 'react'

const Register = () => {
  return (
    <div className="h-[450px] flex items-center justify-center px-4 py-10">

      {/* Form Container */}
      <div className="w-full max-w-lg bg-[#0a1727] border border-[#1f2937] rounded-3xl p-8 shadow-2xl">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">
            Join ChillZone 🍨
          </h1>

          <p className="text-[#7b8794] mt-3 text-sm">
            Create your account and enjoy sweet moments
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-5">

          {/* Full Name */}
          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-[#1f2937] text-white outline-none focus:border-purple-400 transition-all duration-300"
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
              className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-[#1f2937] text-white outline-none focus:border-cyan-400 transition-all duration-300"
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
              className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-[#1f2937] text-white outline-none focus:border-pink-400 transition-all duration-300"
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
              className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-[#1f2937] text-white outline-none focus:border-yellow-400 transition-all duration-300"
            />
          </div>

          {/* Terms */}
          <label className="flex items-center gap-2 text-sm text-gray-400">
            <input type="checkbox" className="accent-cyan-400" />
            I agree to the Terms & Conditions
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-3 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-400 text-white font-semibold hover:scale-[1.02] transition-all duration-300"
          >
            Create Account
          </button>

        </form>

        {/* Bottom Text */}
        <p className="text-center text-sm text-gray-400 mt-6">
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