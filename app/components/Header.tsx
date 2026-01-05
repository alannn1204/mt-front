"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="font-sans sticky top-0 z-50 bg-slate-900 text-white shadow">
      
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-3">
        
        {/* Top row (logo + hamburger) */}
        <div className="flex w-full md:w-auto items-center justify-between">
          
          {/* Logo */}
          <a href="/" className="mb-0">
            <img
              src="/myticketbus-logo.svg"
              alt="MyTicket Bus"
              className="h-10 w-auto"
            />
          </a>

          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            {open ? (
              <XMarkIcon className="w-7 h-7" />
            ) : (
              <Bars3Icon className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav
          className={`flex flex-col text-sm md:flex-row md:space-x-6 w-full md:w-auto
                      ${open ? "block" : "hidden"} md:flex`}
        >
          <a className="py-2 md:py-0 hover:text-blue-400 cursor-pointer">
            Home
          </a>
          <a className="py-2 md:py-0 hover:text-blue-400 cursor-pointer">
            Contact Us
          </a>
          <a className="py-2 md:py-0 hover:text-blue-400 cursor-pointer">
            Check Ticket
          </a>
          <a className="py-2 md:py-0 hover:text-blue-400 cursor-pointer">
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}
