import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function BuffettismsPage() {
    return (
        <div className="booksContainer">
            <div className="bookSectionLeft">
                <div className="bookImage">
                    <Image 
                        src="/images/buffett-isms-cover-front.png" 
                        alt="Buffett-isms front of book cover" 
                        width={0} 
                        height={0} 
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                <div className="bookContent">
                    <h1>Buffett-isms! The ABC Guide to Life</h1>
                    <p className="paddingTop">Pre-order at <Link href="mailto:info@bookwormomaha.com">info@bookwormomaha.com</Link></p>
                </div>
            </div>
            <div className="fullWidthContent">
                
            </div>
        </div>
    );
}