import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex gap-x-2 bg-teal-500 p-5">
      <Link href={"/"}>Home</Link>
      <Link href={"/users"}>Users</Link>
      <Link href={"/products"}>Products</Link>
    </nav>
  );
};

export default Navbar;
