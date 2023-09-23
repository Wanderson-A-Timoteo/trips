"use client"

import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
  
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { status, data } = useSession();

  const handleLoginClick = () => signIn();
  const handleLogoutClick = () => {
    setMenuIsOpen(false);
    signOut();
  };

  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

  return(
    <div className='container mx-auto p-5 py-0 h-[93px] flex justify-between items-center'>
      <Link href="/">
        <div className='relative h=[32px] w=[182px]'>
          <Image 
            width={183} 
            height={40} 
            src="/images/logo.png" alt="Logo Trips" 
          />
        </div>
      </Link>
      
      {status === "unauthenticated" && (
        <button 
          className='text-primary tetxt-sm font-semibold p-3 mr-2' 
          onClick={handleLoginClick}
        >
          Login
        </button>
      )}

      {status === "authenticated" && data.user && (
        <div className="flex items-center gap-2 border-grayLighter border border-solid rounded-full p-2 px-3 relative">
          <AiOutlineMenu className="cursor-pointer" size={16} onClick={handleMenuClick} />

          <Image 
            src={data.user.image!} 
            alt={data.user.name!} 
            height={35} 
            width={35}
            className='rounded-full shadow-md' 
          />
          {menuIsOpen && (
            <div className='z-50 absolute top-16 right-0 w-[120px] h-[100px] bg-slate-100 rounded-lg shadow-md flex flex-col justify-center items-center'>
              <Link href={'/my-trips'}>
                <button className='text-primary text-sm font-semibold p-2 border-b border-gray-300 border-solid hover:text-primaryDarker hover:bg-white hover:w-full' onClick={handleLogoutClick}>
                  Minhas Viagens
                </button>
              </Link>

              <button className='text-primary text-sm font-semibold p-2 hover:text-primaryDarker hover:bg-white hover:w-full' onClick={handleLogoutClick}>
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
};
export default Header;
