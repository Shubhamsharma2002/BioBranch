import React from 'react'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const  Loginwithlinkdin = ()=> {
  return (
       <div className="flex justify-center gap-2 mt-4 bg-emerald-400 p-3 items-center text-white cursor-pointer">
         <FontAwesomeIcon icon={faLinkedin}  />
         <span>Continue with Linkdin</span>
       </div>
  )
}

export default Loginwithlinkdin