"use client";

import React, { useEffect, useState } from "react";
import { getSession, signOut } from "next-auth/react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    getSession().then((sess) => {
      setSession(sess);
    });
  }, []);

  return (
    <div className="p-4 bg-amber-400 items-center text-white font-bold flex justify-around">
      <div>
        <Link href="/">Biobranch</Link>
      </div>
      <div className="flex gap-6">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/price">Price</Link>
      </div>
      <div className="flex gap-3 items-center">
        {session ? (
          <>
            <Link href="/account">Welcome, {session.user?.name}</Link>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="flex items-center cursor-pointer gap-2 text-white"
            >
              Logout
              <FontAwesomeIcon icon={faRightFromBracket} />
            </button>
          </>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
