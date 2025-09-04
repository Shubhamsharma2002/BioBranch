import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function LoginWithGoogle() {
  return (

    
    <div className="w-full mt-3">
      <button className="w-full py-3 px-6 flex items-center justify-center gap-3 rounded-lg shadow-sm  bg-green-400 text-white cursor-pointer">
        <FontAwesomeIcon icon={faGoogle} className="h-5 w-5 text-orange-600" />
        <span className="text-base font-medium">Sign in with Google......</span>
      </button>
    </div>
  );
}
