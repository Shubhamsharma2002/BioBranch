import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Loginwithemail = () => {
  return (
    <div className="flex justify-center gap-2 mt-4 bg-amber-700 p-3 items-center text-white cursor-pointer">
      <FontAwesomeIcon icon={faEnvelope} />
      <span>Continue with Email</span>
    </div>
  );
};

export default Loginwithemail;
