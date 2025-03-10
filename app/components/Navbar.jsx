import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./logo.png";

const Navbar = () => {
  return (
    <nav>
      <Image src={Logo} alt="logo" width={70} height={100} placeholder="blur" />
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
};

export default Navbar;
