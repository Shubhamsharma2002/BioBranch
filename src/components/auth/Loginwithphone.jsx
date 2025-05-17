import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from "@fortawesome/free-solid-svg-icons";
const Loginwithphone = () => {
  return (
    <div className="flex justify-center gap-2 mt-4 bg-amber-700 p-3 items-center text-white cursor-pointer">
      <FontAwesomeIcon icon={faPhone} />
      <span>Continue with Phone</span>
    </div>
  );
};

export default Loginwithphone;
