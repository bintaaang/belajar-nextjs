"use client";

import { useState } from "react";
import Link from "next/link";
import SuccessMessage from "@/components/ui/SuccessMessage";

export default function Login() {
  
  const [showSuccess, setShowSuccess] = useState(false);
  const handleLogin = () => {
    setShowSuccess(true);
  };
  return (
    <div className="bg-black">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">
          Login to your account
        </h1>
        {showSuccess && <SuccessMessage message="Login berhasil!" />}
        <form className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-bold text-black"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-bold text-black"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            onClick={(handleLogin)}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            {/* {value ? "Sembunyikan" : "Tampilkan"} Sign in */}
            Sign in
          </button>
        </form>
        <p className="text-black text-center mt-4">
          Back to home{" "}
          <Link href="/" className="text-center text-blue-900 hover:underline">
            Click here
          </Link>
        </p>
        {/* <p className="mt-6 text-sm text-center text-gray-600">
            Don’t have an account?{" "}
            <a href="/register" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p> */}
      </div>
    </div>
  );
}
