import LoginWithGoogle from "@/components/buttons/LoginWithGoogle";
import LoginWithLinkdin from "@/components/buttons/LoginWithLinkdin";

export default function Login() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      {/* Left: Login Form */}
      <div className="p-4 max-w-xs mx-auto flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-center mb-4">Sign In</h1>
        <LoginWithGoogle />
        <LoginWithLinkdin />
      </div>

      {/* Right: Image or anything else */}
      <div className="flex items-center justify-center bg-gray-100">
        {/* Add your image or content here */}
        {/* <img src="/login-image.png" alt="Login Illustration" className="w-3/4" /> */}
      </div>
      
    </div>
  );
}
