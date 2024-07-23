import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.bookSection}>
        <h1>BRAND NEW! </h1>
        <Image 
          src="/images/buffett-isms-cover-front.png" 
          alt="Buffett-isms front of book cover" 
          width={0} 
          height={0} 
          sizes="100vw"
          style={{ width: '75%', height: 'auto' }}
        />
        <Image 
          src="/images/buffett-isms-cover-back.png" 
          alt="Buffett-isms back of book cover" 
          width={0} 
          height={0} 
          sizes="100vw"
          className={styles.frontpageImageLast}
          style={{ width: '75%', height: 'auto' }}
        />
        <p className={styles.bookDescription}>Pre-order at <Link href="mailto:info@bookwormomaha.com">info@bookwormomaha.com</Link></p>
      </div>
      <div className={styles.bookSection}>
        <h4><Link href="/books/new-berkshire-abc">My New Berkshire ABC</Link></h4>
        <Image 
          src="/images/cover-new_berkshire_abc-front.jpg" 
          alt="My New Berkshire ABC front of book cover" 
          width={0} 
          height={0} 
          sizes="100vw"
          style={{ width: '75%', height: 'auto' }}
        />
        <Image 
          src="/images/cover-new_berkshire_abc-back.jpg" 
          alt="My New Berkshire ABC back of book cover" 
          width={0} 
          height={0} 
          sizes="100vw"
          className={styles.frontpageImageLast}
          style={{ width: '75%', height: 'auto' }}
        />
        <p className={styles.bookDescription}>Now available <Link href="http://www.bookwormomaha.com">www.bookwormomaha.com</Link>  or <Link href="tel:4023922877">402-392-2877</Link></p>
      </div>
      <div className={styles.bookSectionLeft}>
        <div className={styles.bookImage}>
          <Image 
            src="/images/cover_seder.jpeg" 
            alt="Seder Stories front of book cover" 
            width={0} 
            height={0} 
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className={styles.bookContent}>
          <h4><Link href="/books/seder-stories">Seder Stories</Link></h4>
          <p className="bookReviews">“This charming collection of Seder table conversation starters should encourage us to share experiences from our own families that enhance the meaning the message of the Exodus as we read the Haggadah.”</p>
          <p className="bookReviewsAuthor">—Rabbi Jules Harlow</p>
					<p className="bookReviews">“Passover is a time to tell stories, and Nancy Rips has collected a treasure trove of terrific tales of Seder that tickle the funny (shank) bone! SEDER STORIES is filled with glimpses of Seders on the homes of the famous and not so famous, the stories reveal the power of the ritual to create lifelong memories. A great gift for anyone hosting or attend a Seder. Highly recommended.”</p>
          <p className="bookReviewsAuthor">—Dr. Ron Wolfson, President Synagogue 3000, Author of PASSOVER, THE FAMILY GUIDE TO SPECIAL CELEBRATIONS.</p>	
        </div>
      </div>
      <div className={styles.bookSectionRight}>
        <div className={styles.bookImage}>
          <Image 
            src="/images/cover_highholidaystories.gif" 
            alt="High Holiday Stories front of book cover" 
            width={0} 
            height={0} 
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className={styles.bookContent}>
          <h4><Link href="/books/high-holiday-stories">High Holiday Stories</Link></h4>
          <p className="bookReviews">“My Dad recognized my interest in science and took me to the Planetarium and Tomorrow Land at Disney World. Never did I dream I’d be celebrating Hanukkah in space, aboard the spaceship Hubble.”</p>	
          <p className="bookReviewsAuthor">—Jeffrey A. Hoffman, PhD., Professor of Communications</p>
					<p className="bookReviews">“I close my eyes and think of Grandma, tasting a bit of her childhood each Hanukkah, when she prepared the latkes just as her mother had done.”</p>
          <p className="bookReviewsAuthor">—Faye Moskowitz</p>
        </div>
      </div>
      <div className={styles.bookSectionLeft}>
        <div className={styles.bookImage}>
          <Image 
            src="/images/cover_hanukkahstories.gif" 
            alt="Hanukkah Stories front of book cover" 
            width={0} 
            height={0} 
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className={styles.bookContent}>
          <h4><Link href="/books/hanukkah-stories">Hanukkah Stories</Link></h4>
          <p className="bookReviews">“HANUKKAH STORIES proves the adage that good things come in small packages. This collection of contemporary stories shows that the joy of miracles, the passing on of traditions, and the delight in bringing light into the world give the minor holiday of Hanukkah broad resonance.”</p>		    
          <p className="bookReviewsAuthor">—Hadassah Magazine</p>
					<p className="bookReviews">“HANUKKAH STORIES has much thought and charm. While centered on a Jewish holiday, it appeals to the virtues of perseverance, generosity, and memory, which ring true for any faith.”</p>
          <p className="bookReviewsAuthor">—The Midwest Book Review</p>
        </div>
      </div>
      <div className={styles.bookSectionRight}>
        <div className={styles.bookImage}>
          <Image 
            src="/images/cover_myfirstberkshire.png" 
            alt="My First Berkshire ABC front of book cover" 
            width={0} 
            height={0} 
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className={styles.bookContent}>
          <h4><Link href="/books/first-berkshire-abc">My First Berkshire ABC</Link></h4>
          <p className="bookReviews">“New book teaches children the ABC’s of Buffett’s Berkshire Hathaway. Author Nancy Rips and illustrator Tom Kerr have teamed up on MY FIRST BERKSHIRE ABC to teach children about one of the world’s best known companies and a little about the local billionaire behind it.”</p>
          <p className="bookReviewsAuthor">—NY DAILY NEWS</p>
        </div>
      </div>
      <div className={styles.bookSectionLeft}>
        <div className={styles.bookImage}>
          <Image 
            src="/images/cover_noah.jpg" 
            alt="Noah and the Eight Trucks of Hannukah front of book cover" 
            width={0} 
            height={0} 
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className={styles.bookContent}>
          <h4><Link href="/books/noah-eight-trucks-of-hanukkah">Noah and the Eight Trucks of Hanukkah</Link></h4>
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
    </main>
  );
}
