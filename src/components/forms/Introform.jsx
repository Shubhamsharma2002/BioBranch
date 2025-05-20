"use client";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

const Introform = () => {
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedUsername = username.trim();
    if (trimmedUsername.length === 0) return;

    await signIn("google", {
      callbackUrl: `/account?username=${encodeURIComponent(trimmedUsername)}`,
    });
  };

  return (
    <div className="flex justify-center mt-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap md:flex-nowrap items-center bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden w-full max-w-xl"
      >
        <span className="px-4 py-3 text-gray-700 bg-gray-100 font-medium whitespace-nowrap">
          bioserach.to/
        </span>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="py-3 px-4 flex-1 min-w-[200px] w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          placeholder="username"
        />
        <button
          type="submit"
          className="py-3 px-6 font-semibold text-white bg-blue-600 hover:bg-blue-700 w-full md:w-auto"
        >
          Join for Free
        </button>
      </form>
    </div>
  );
};

export default Introform;
