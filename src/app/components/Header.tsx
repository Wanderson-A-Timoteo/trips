import Image from 'next/image';
import React from 'react';

const Header = () => {
  return(
    <div className='container mx-auto'>
      <Image width={183} height={40} src="/images/logo-trips.png" alt="Logo Trips" />
    </div>
  )
};
export default Header;