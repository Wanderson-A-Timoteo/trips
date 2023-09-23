import Image from "next/image";
import Link from "next/link";
import React from "react"; 

export default function QuickSearch() {
  return(
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-grayLighter"></div>
        <h2 className="font-medium text-grayPrimary whitespace-nowrap mx-2">
          Tente pesquisar por
        </h2>
        <div className="w-full h-[1px] bg-grayLighter"></div>
      </div>

      <div className="flex w-full justify-between mt-5">
        <div className="flex flex-col items-center gap-1">
          <Link href={`/trips/search?text=hotel`} className="flex flex-col items-center hover:text-primary transition-all">
            <Image width={35} height={35} src="/images/hotel-icon.png" alt="Hotel" />
            <p className="text-sm text-grayPrimary">Hotel</p>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Link href="/trips/search?text=fazenda" className="flex flex-col items-center hover:text-primary transition-all">
            <Image width={35} height={35} src="/images/farm-icon.png" alt="Hotel" />
            <p className="text-sm text-grayPrimary">Fazenda</p>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Link href="/trips/search?text=Chalé" className="flex flex-col items-center hover:text-primary transition-all">
            <Image width={35} height={35} src="/images/cottage-icon.png" alt="Hotel" />
            <p className="text-sm text-grayPrimary">Chalé</p>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Link href="/trips/search?text=pousada" className="flex flex-col items-center hover:text-primary transition-all">
            <Image width={35} height={35} src="/images/inn-icon.png" alt="Hotel" />
            <p className="text-sm text-grayPrimary">Pousada</p>
          </Link>
        </div>
      </div>
    </div>
  )
};
