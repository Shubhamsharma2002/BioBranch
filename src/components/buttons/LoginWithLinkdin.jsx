import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function LoginWithLinkdin() {
  return (

    
    <div className="w-full mt-3">
      <button className="w-full py-3 px-6 flex items-center justify-center gap-3 rounded-lg shadow-sm  bg-blue-500 text-white cursor-pointer">
        <FontAwesomeIcon icon={faLinkedinIn} className="h-5 w-5" />
        <span className="text-base font-medium">Sign in with Linkdin ......</span>
      </button>
    </div>
  );
}
