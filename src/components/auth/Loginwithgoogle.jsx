"use client"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { signIn } from "next-auth/react";

const Loginwithgoogle = () => {
  return (
    <div
      onClick={() => signIn("google", { callbackUrl: "/about" } )} // ✅ redirect after login
      className="flex justify-center gap-2 mt-4 bg-blue-600 p-3 items-center text-white cursor-pointer hover:bg-blue-700 transition-colors duration-200 rounded"
    >
      <FontAwesomeIcon icon={faGoogle} className="text-white text-2xl" />
      <span>Continue with Google</span>
    </div>
  );
};

export default Loginwithgoogle;
