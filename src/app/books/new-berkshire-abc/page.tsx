import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NewBerkshirePage() {
    return (
        <div className="booksContainer">
            <div className="bookSectionLeft">
                <div className="bookImage">
                    <img src="/images/cover-new_berkshire_abc-front.jpg" alt="My New Berkshire ABC front of book cover" width="100%;"/>
                </div>
                <div className="bookContent">
                    <h1>My New Berkshire ABC</h1>
                    <p>Kids will learn the alphabet the Warren Buffett way: A is for Apple, B is for Benjamin Moore, C is for Coca Cola, D is for Duracell. It’s everyone’s favorite family Berkshire book, brand new and updated for 2022!</p>
                    <p className="paddingTop">Now available <Link href="http://www.bookwormomaha.com">www.bookwormomaha.com</Link>  or <Link href="tel:4023922877">402-392-2877</Link></p>
                </div>
            </div>
            <div className="fullWidthContent">
                
            </div>
        </div>
    );
}