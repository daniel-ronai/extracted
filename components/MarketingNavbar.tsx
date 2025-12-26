'use client';

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MarketingNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="marketing-navbar">
      <Link href="/" className="marketing-navbar-logo">
        Extracted
      </Link>

      <div className="marketing-navbar-links">
        <Link href="/" className={pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link href="/library" className={pathname === "/library" ? "active" : ""}>
          Library
        </Link>
        <Link href="/about" className={pathname === "/about" ? "active" : ""}>
          About
        </Link>
      </div>

      <div className="marketing-hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`marketing-mobile-menu ${isOpen ? "show" : ""}`}>
        <Link 
          href="/" 
          className={pathname === "/" ? "active" : ""} 
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link 
          href="/library" 
          className={pathname === "/library" ? "active" : ""} 
          onClick={() => setIsOpen(false)}
        >
          Library
        </Link>
        <Link 
          href="/about" 
          className={pathname === "/about" ? "active" : ""} 
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
      </div>
    </nav>
  );
}