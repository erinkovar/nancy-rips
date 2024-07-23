import React from "react";
import Image from "next/image";

export default function HighHolidayPage() {
    return (
        <div className="booksContainer">
            <div className="bookSectionLeft">
                <div className="bookImage">
                    <Image 
                        src="/images/cover_highholidaystories.gif" 
                        alt="High Holiday Stories front of book cover" 
                        width={0} 
                        height={0} 
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                <div className="bookContent">
                    <h1>High Holiday Stories</h1>
                    <p>The High Holidays are the most important festivals of the Jewish year, and all Jews have their own memories of these special dyas. It’s a time to remember, a time to be with families, and a time to tell stories about past generations. High Holiday Stories is filled with 101 heartfelt holiday remembrances, from famous people, and some only known to their own circle of family and friends. They recount varied Rosh Hashanah and Yom Kippur experiences, from observing the holiday in the Colorado Rockies to Army bases in Iraq, even online in L.A.</p>
                </div>
            </div>
            <div className="fullWidthContent">
                <p>The stories come from people of all ages, all professionals, from New York to California, New Zealand to England. And you don’t have to be Jewish to appreciate this, because with the 21st century being a much smaller world, many faiths can come together and appreciate these stories.</p>
                <h3 className="reviewsPaddingTop">Rave Reviews</h3>
                <p className="bookReviews">“My Dad recognized my interest in science and took me to the Planetarium and Tomorrow Land at Disney World. Never did I dream I’d be celebrating Hanukkah in space, aboard the spaceship Hubble.”</p>	
                <p className="bookReviewsAuthor">—Jeffrey A. Hoffman, PhD., Professor of Communications</p>
				<p className="bookReviews">“I close my eyes and think of Grandma, tasting a bit of her childhood each Hanukkah, when she prepared the latkes just as her mother had done.”</p>
                <p className="bookReviewsAuthor">—Faye Moskowitz</p>
            </div>
        </div>
    );
}