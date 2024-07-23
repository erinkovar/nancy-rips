import React from "react";
import Image from 'next/image';
import Link from "next/link";

export function Header() {
  return (
    <header className="header">
        <div className="logo">
            <Link href="/">
                <Image
                    src="/images/nancyrips-logo.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="Picture of nancy rips' logo"
                    style={{ width: '30%', height: 'auto' }}
                />
            </Link>
        </div>
    </header>
  );
}