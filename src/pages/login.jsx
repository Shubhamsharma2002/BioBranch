import Loginwithgoogle from '@/components/auth/Loginwithgoogle';
import Loginwithlinkdin from '@/components/auth/loginwithlinkdin';
import Loginwithphone from '@/components/auth/Loginwithphone';
import React from 'react';


function Login() {
  return (
    <div className='mt-5 border-2 border-amber-500 text-center font-bold w-1/2 mx-auto p-4'>
      Sign In

     <Loginwithgoogle/>
     <Loginwithlinkdin/>
     <Loginwithphone/>
    </div>
  );
}

export default Login;
