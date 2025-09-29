import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="w-full flex justify-center p-4">
      <header className="container w-full mx-auto">
        <nav className="w-full flex justify-between items-center">
          <div className="left_nav flex gap-5">
            <Image
              src="/logo/tpay-logo.png"
              width={100}
              height={20}
              alt="Tpay Logo"
            />

            <ul className="flex gap-5 items-center">
              <li>For Businesses</li>
              <li>For Individual</li>
            </ul>
          </div>

          <div className="right_nav flex gap-5">
            <ul className="flex gap-5 items-center">
              <li>About Us</li>
              <li className="border-e-2 pr-5">Contact Us</li>
              <li>Login</li>
            </ul>

            <button className="bg-green-500 p-3 rounded-2xl">
              Create free account
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}
