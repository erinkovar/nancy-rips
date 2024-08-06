'use client';
import React, { useState } from "react";
import Link from "next/link";
import { Navigation } from "./Navigation";

export function Header() {
  const [ mobileNavOpen, setMobileNavOpen ] = useState(false);
  const mobileClasses = () => {
    return mobileNavOpen ? "mobileNav open" : "mobileNav";
  };
  console.log(mobileNavOpen);
  return (
    <header className="header">
        <div className="logo">
            <Link href="/">
              <img src="/images/nancyrips-logo.png" alt="Picture of nancy rips' logo" width="30%"/>
            </Link>
        </div>
        <div className={mobileClasses()}>
        { mobileNavOpen ?
          <>
            <div className="closeIcon" onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </div>
            <Navigation />
          </>
        :
          <div className="icon" onClick={() => setMobileNavOpen(!mobileNavOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
          </div>
        }
        </div>
    </header>
  );
}