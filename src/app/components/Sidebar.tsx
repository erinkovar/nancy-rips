import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Sidebar() {

  return (
    <div className="sidebar">
        <Image
            src="/images/rips_profile.jpg"
            width={0}
            height={0}
            sizes="100vw"
            alt="Picture of nancy rips' logo"
            style={{ width: '80%', height: 'auto' }}
        />
        <h3>Books</h3>
        <ul>
            <li><Link href="/books/seder-stories">seder stories</Link></li>
            <li><Link href="/books/high-holiday-stories">high holiday stories</Link></li>
            <li><Link href="/books/hanukkah-stories">hanukkah stories</Link></li>
            <li><Link href="/books/first-berkshire-abc">my first berkshire abc</Link></li>
            <li><Link href="/books/noah-eight-trucks-of-hanukkah">noah and the eight trucks of hanukkah</Link></li>
            <li><Link href="/books/new-berkshire-abc">my new berkshire abc</Link></li>
            <li><Link href="/books/buffett-isms-guide-to-life">buffett-isms! the abc guide to life</Link></li>
        </ul>
    </div>
  );
}