import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex bg-teal-500 p-5 justify-between">
      <div className="flex gap-x-2">
        <Link href={"/"}>Home</Link>
        <Link href={"/users"}>Users</Link>
        <Link href={"/products"}>Products</Link>
      </div>
      <Link href="/api/auth/signin">Login</Link>
    </nav>
  );
};

export default Navbar;
