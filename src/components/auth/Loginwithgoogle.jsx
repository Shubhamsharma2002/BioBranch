import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
const Loginwithgoogle = () => {
  return (
    <div className="flex justify-center gap-2 mt-4 bg-blue-600 p-3 items-center text-white cursor-pointer">
      <FontAwesomeIcon icon={faGoogle} className="text-white text-2xl" />
      <span>Continue with Google</span>
    </div>
  );
};

export default Loginwithgoogle;
