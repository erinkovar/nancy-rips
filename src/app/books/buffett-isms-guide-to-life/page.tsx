import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function BuffettismsPage() {
    return (
        <div className="booksContainer">
            <div className="bookSectionLeft">
                <div className="bookImage">
                    <img src="/images/buffett-isms-cover-front.png" alt="Buffett-isms front of book cover" width="100%;"/>
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