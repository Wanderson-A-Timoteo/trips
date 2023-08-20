import React, { ReactNode } from "react";

export const metadata = {
  title: "Trips"
}
const Trips = ({children}: {children: ReactNode}) => {
  return (
    <div>
      <h2>About Layout</h2>
      {children}
    </div>
  )
}
export default Trips;