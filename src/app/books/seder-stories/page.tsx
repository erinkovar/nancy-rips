import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

export default function SederPage() {
    return (
        <div className="booksContainer">
            <div className="bookSectionLeft">
                <div className="bookImage">
                    <Image 
                        src="/images/cover_seder.jpeg" 
                        alt="Seder Stories front of book cover"  
                        width={0} 
                        height={0} 
                        sizes="100vw"
                        className="bookHover"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                <div className="bookContent">
                    <h1>Seder Stories</h1>
                    <p>Passover is the Festival of Freedom in the Jewish community worldwide. More than any other holiday, it symbolizes what it means to be Jewish: family, food, and fun coupled with an obligation to pass on their story to future generations. &lsquo;Seder Stories&rsquo; contains the memories of childhood Seders from 101 Jewish people. Some of them are famous, like Rabbi Harold Kushner and attorney Alan Dershowitz. Others are famous only within their circle of friends and family. Some of the stories are funny, some poignant, some thought provoking and worth reading. All of them are charming.</p>
                </div>
            </div>
            <div className="fullWidthContent">
                <h3>Rave Reviews</h3>
                <p className="bookReviews">“This charming collection of Seder table conversation starters should encourage us to share experiences from our own families that enhance the meaning the message of the Exodus as we read the Haggadah.”</p>
                <p className="bookReviewsAuthor">—Rabbi Jules Harlow</p>
				<p className="bookReviews">“Passover is a time to tell stories, and Nancy Rips has collected a treasure trove of terrific tales of Seder that tickle the funny (shank) bone! SEDER STORIES is filled with glimpses of Seders on the homes of the famous and not so famous, the stories reveal the power of the ritual to create lifelong memories. A great gift for anyone hosting or attend a Seder. Highly recommended.”</p>
                <p className="bookReviewsAuthor">—Dr. Ron Wolfson, President Synagogue 3000, Author of PASSOVER, THE FAMILY GUIDE TO SPECIAL CELEBRATIONS.</p>	
                <p className="bookReviews">“Why is this Passover book unlike all other books? It’s well seasoned with serious thoughts, fun stories, and rick memories of our ancient traditions. It’s ono you’ll not want to pass over.”</p>
                <p className="bookReviewsAuthor">—John Pollack, former speechwriter for President Bill Clinton and author of <i>Cork Boat</i></p>	
            </div>
        </div>
    );
}