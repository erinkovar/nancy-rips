import React from "react";
import Link from "next/link";

export function Navigation() {

  return (
    <div className="nav">
        <Link href="/about" className="nav-item">
            about
        </Link>
        <Link href="/books" className="nav-item">
            books
        </Link>
        <Link href="/appearances" className="nav-item">
            appearances
        </Link>
        <Link href="mailto:nrips@cox.net" className="nav-item">
            contact
        </Link>
    </div>
  );
}