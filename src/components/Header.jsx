import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow-md">
      {/* Left links */}
      <div className="flex flex-col md:flex-row gap-2 md:gap-6 mb-3 md:mb-0">
        <Link href="/" className="font-bold text-lg">
          Biobranch 
        </Link>
        <Link href="/" className="hover:text-blue-600">
          About
        </Link>
        <Link href="/" className="hover:text-blue-600">
          Pricing
        </Link>
        <Link href="/" className="hover:text-blue-600">
          Contact
        </Link>
      </div>

      {/* Right links */}
      <div className="flex flex-col md:flex-row gap-2 md:gap-6">
        <Link href="/login" className="hover:text-blue-600">
          Sign In
        </Link>
        <Link
          href="/"
          className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
        >
          Create Account
        </Link>
      </div>
    </nav>
  );
}
