import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-walterWhite p-6 justify-center flex flex-col items-center">
      <Image src="/images/logo.png" width={133} height={23} alt="Full Stack Week" />
      <p className="text-sm font-medium mt-1 text-primaryDarker">Copyright &copy; 2023 - Todos os direitos reservados.</p>
      <a 
        className="underline cursor-pointer text-sm font-medium mt-1 text-primaryDarker hover:text-primary" 
        href="https://wanderson-a-timoteo.github.io/my-portfolio-dark-light/"
        target="_blank"
      >
        Wanderson A. Timóteo
      </a>
    </div>
  );
};

export default Footer;
