import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='p-4 bg-amber-400  items-center text-white font-bold flex justify-around '>
      <div>
         <Link href="/">Biobranch</Link>
      </div>
      <div className="flex gap-6">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/price">Price</Link>
      </div>
      <div className="flex gap-3">
         <Link href="/login">Login</Link>
         <Link href="/register">Register</Link>
      </div>
    </div>
  )
}

export default Navbar
