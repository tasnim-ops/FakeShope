import React from 'react'
import { useState } from 'react';
const User = () => {
  const user= true;
  const [profileOpen,setProfileOpen]=useState(false)
  const close=()=>{
    setProfileOpen(null)
  }
  return (

    
    <div>
      <div>
        {user ? (
          <>
            <button onClick={()=>setProfileOpen(!profileOpen)}>
              <img src='https://cdn-icons-png.flaticon.com/512/1077/1077012.png' alt='user' />
            </button>
            {profileOpen && (
              <div onClick={close}>
                <div>
                  <img src='https://cdn-icons-png.flaticon.com/512/1077/1077012.png' alt='user' />
                </div>
              </div>
            )}
          </>
        ):(
          "login"
        )}
      </div>
    </div>
  )
}

export default User
