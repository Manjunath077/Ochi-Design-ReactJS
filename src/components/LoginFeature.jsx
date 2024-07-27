import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";


function LoginFeature() {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  return (
    <div>
      <div className='flex gap-10 items-center justify-center text-white '>
        <div>
          {
            isAuthenticated ?(
              <button onClick={() => logout({ returnTo: window.location.origin})} className='text-md capitalize font-light button1'>Logout</button>
              ) : (
                <button onClick={() => loginWithRedirect()} className='text-md capitalize font-light button2'>Login</button>
              )
          }
        </div>
        <div>
          {isAuthenticated && <p>{user.name}</p>}
        </div>
      </div>
    </div>
  )
}

export default LoginFeature