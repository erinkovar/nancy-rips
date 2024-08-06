import React from "react";
import Image from "next/image";
import styles from "./page.module.scss";

export default function NoahPage() {
    return (
        <div className="booksContainer">
            <div className="bookSectionLeft">
                <div className={styles.bookImage}>
                    <img src="/images/cover_noah.jpg" alt="Noah and the Eight Trucks of Hannukah front of book cover" width="100%;"/>
                </div>
                <div className="bookContent">
                    <h1>Noah and the Eight Trucks of Hannukah</h1>
                    <p>Noah is a young boy who loves Hanukkah, but his favorite thing in the whole world is trucks. Why aren’t they part of the Hanukkah celebration? In this story, Noah devises a way to have a Festival of Trucks along with the Festival of Lights, each honoring the brave Maccabees.</p>
                </div>
            </div>
            <div className="fullWidthContent">
                <h3 className="reviewsPaddingTop">Rave Reviews</h3>
                <p className="bookReviews">“Noah’s contagious joy in the season — and passion for all things that vroom and haul — will delight truck-crazy kids everywhere as they recognize their favorites in this innovative twist on the tradition and spirit of Hanukkah.”</p>
                <p className="bookReviewsAuthor">—Forward Magazine</p>
				<p className="bookReviews">“This colorful picture book pairs a small boy who loves trucks with the holiday of Hanukkah in a charming way. Preschoolers are sure to identify with Noah, who prefers trucks to candles.”</p>
                <p className="bookReviewsAuthor">—Association of Jewish Libraries Review</p>
				<p className="bookReviews">“Conjures with loving wonder the whimsies of childhood, bringing to vivid life a little boy, his dog, and the abiding traditions that connect us to our past, our present, and our ever-unfolding future.”</p>
                <p className="bookReviewsAuthor">—Todd Robinson, PhD, Professor of Communications</p>
				<p className="bookReviews">“Preschoolers are sure to identify with Noah, who prefers trucks to Hanukkah candles!”</p>
                <p className="bookReviewsAuthor">—Joyce Levine, Past President Jewish Library Association</p>
				<p className="bookReviews">“Warm and open-hearted, charming and delightfully witty, and gorgeous to look at!”</p>
                <p className="bookReviewsAuthor">—Dave Wingert, award-winning radio personality</p>
				<p className="bookReviews">“Nancy Rips’s story touchingly embodies a child’s sweet and enthusiastic perspective of the Festival of Lights.”</p>
                <p className="bookReviewsAuthor">—Bruce Arant, children’s book author and illustrator</p>
            </div>
        </div>
    );
}