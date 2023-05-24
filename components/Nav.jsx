"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'
const Nav = () => {
  const isUSerLoggedIn = true;
  const [providers, setProviders] = useState(null);

  useEffect(()=>{
    const setProviders = async () =>{
      const res = await getProviders();

      setProviders(res)
    }

    setProviders()
  }, [])

  return (
    <nav className='flex-between mb-16 w-full pt-3'>
       <Link href='/' className='flex gap-2 flex-center'>
        <Image 
        src="/assets/images/logo.svg"
        alt="promptville logo"
        width={30}
        height={30}
        className="object-contain"
        />
        <p className='logo_text'>Promptville</p>
        </Link> 

        {/* desktop nav */}

        <div className='sm:flex hidden'>
          {isUSerLoggedIn ? (
            <div className='flex gap-3 md:gap-5'>
              <Link href="/create-prompt" className="black_btn">
              Create Post
              </Link>
              <button type='button' onClick={signOut} className="outline_btn">Sign Out</button> 
              <Link href="/profile">
                <Image
                  src="/assets/images/logo.svg"
                  width={37}
                  height={37}
                  alt="profile pic"
                  className='rounded-full'
                />
              </Link>
            </div>
          ) : (
            <>
            {
              providers && Object.values(providers).map(providers)
              =>{
                <button
                  type='button'
                  key={provider.name}
                  onClick={()=> signIn(provider.id)}
                  className='black_btn'
                >
                  Sign In
                </button>
              }
            }
            </>
            )          
          }
        </div>
    </nav>
  )
}

export default Nav