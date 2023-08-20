import React from "react";
import Trips from "./components/Trips";

export const metadata = {
  title: "About"
}
const Page = () => {
  return (
    <div>
      <h1>Trips</h1>
      <Trips />
    </div>
  )
}
export default Page;
