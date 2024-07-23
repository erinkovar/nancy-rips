import React from "react";
import Image from "next/image";

export default function HanukkahPage() {
    return (
        <div className="booksContainer">
            <div className="bookSectionLeft">
                <div className="bookImage">
                    <Image 
                        src="/images/cover_myfirstberkshire.png" 
                        alt="My First Berkshire ABC front of book cover" 
                        width={0} 
                        height={0} 
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                <div className="bookContent">
                    <h1>My First Berkshire ABC</h1>
                    <p>Warren Buffet’s Berkshire Hathaway Inc invests in dozens of businesses, and a new book tries to explain it all to young readers, from A to Z. Two Omaha residents, author Nancy Rips and illustrator Tom Kerr, have teamed up on “My First Berkshire ABC” to teach children about one of the world’s best-known companies, and a little about the local billionaire behind it.</p>
                    <p className="paddingTop">More than 1,000 copies were sold at Berkshire’s annual meeting, which draws thousands of people to Omaha and where Buffett has a say on what gets sold.</p>
                    
                </div>
            </div>
            <div className="fullWidthContent">
                <p>“You need something to bring home to your kids and grandkids to explain Berkshire,” Rips, who has also written three books about Jewish holidays, said in a joint interview with Kerr.</p>
                <p className="paddingTop">Kerr has worked at many newspapers and drew McGruff, the Crime Dog for the National Crime Prevention Council.</p>
                <p className="paddingTop">“Part of what Warren talks about is investing in things that you know” he said. “Virtually everything in here is something that somebody can relate to and touch and understand.”</p>
                <h3 className="reviewsPaddingTop">Rave Reviews</h3>
                <p className="bookReviews">“New book teaches children the ABC’s of Buffett’s Berkshire Hathaway. Author Nancy Rips and illustrator Tom Kerr have teamed up on MY FIRST BERKSHIRE ABC to teach children about one of the world’s best known companies and a little about the local billionaire behind it.”</p>
                <p className="bookReviewsAuthor">—NY DAILY NEWS</p>
            </div>
        </div>
    );
}