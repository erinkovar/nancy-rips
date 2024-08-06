import React from "react";
import Image from "next/image";

export default function HanukkahPage() {
    return (
        <div className="booksContainer">
            <div className="bookSectionLeft">
                <div className="bookImage">
                    <img src="/images/cover_hanukkahstories.gif" alt="Hanukkah Stories front of book cover" width="100%;"/>
                </div>
                <div className="bookContent">
                    <h1>Hanukkah Stories</h1>
                    <p>Hanukkah Stories is filled with over 101 stories of personal memories, anecdotes, and tales from celebrities to people like you and me. Here youll find heartwarming reminiscences about Hanukkah experiences across the globe from an RV campground in California, on the ice in Finland, even aboard Spaceship Hubble. Theres also a chapter just for latkes, including the new chocolate chip ones. Hanukkah is a joyful holiday. Whatever ones religion, its a testament to the universal human values of dedication, perseverance, generosity, and remembrance. </p>
                </div>
            </div>
            <div className="fullWidthContent">
                <p>Whether its sharing stories with our families today or passing on traditions for tomorrows generation, Hanukkah is a festival of family, celebration, and joy.</p>
                <h3 className="reviewsPaddingTop">Rave Reviews</h3>
                <p className="bookReviews">“HANUKKAH STORIES proves the adage that good things come in small packages. This collection of contemporary stories shows that the joy of miracles, the passing on of traditions, and the delight in bringing light into the world give the minor holiday of Hanukkah broad resonance.”</p>		    
                <p className="bookReviewsAuthor">—Hadassah Magazine</p>
				<p className="bookReviews">“HANUKKAH STORIES has much thought and charm. While centered on a Jewish holiday, it appeals to the virtues of perseverance, generosity, and memory, which ring true for any faith.”</p>
                <p className="bookReviewsAuthor">—The Midwest Book Review</p>
            </div>
        </div>
    );
}