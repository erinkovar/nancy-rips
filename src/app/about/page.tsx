import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="content about fullWidthContent">
            <h1>About</h1>
            <p className="paddingTop">Compact dynamo Nancy Rips of Omaha was long ago branded the Book Maven to describe her passion for good reads and her desire to share this wonderful affliction. She’s a longtime bookseller and book reviewer who has always loved the Jewish holidays. Her passion for books, reading, libraries, and the Jewish tradition are infectious. In addition, she’s a force of nature when it comes to her regular review segments on radio and Omaha’s CBS-TV affiliate. In her free time, predawn, between 5:00 and 6:00 AM, you can find her at the gym lifting weights.</p>

            <p className="paddingTop">For years she’s reviewed new releases on the CBS TV affiliate in the Midwest and radio stations. She’s been a live-out-loud presence behind the counter at local bookstores since 2000 at The Bookworm, a local independent bookstore. Her theatrical and fashion bent finds her dressing in everything from couture to costume when promoting titles.</p>

            <p className="paddingTop">Her huge personal collection at home &ndash; the bulk of it arrayed in a floor-to-ceiling bookcase rivaling that of some libraries, exemplifies a voracious reading appetite.</p>

            <p className="paddingTop">Active with the Kripke Federation Jewish Library and the Omaha Public Library, she once organized a campaign to keep the Swanson branch open. She’s also a born storyteller.</p>

            <p className="paddingTop">This book evangelist turned author with the 2008 publication of Seder Stories, an anthology of reminiscences drawn from a gallery of well known people from Alan Dershowitz and Harold Kushner to hometown relatives and friends. She variously solicited and discovered the stories, ranging from wordy expositions to pithy one-line observations, all in service of her theme of ’Passover thoughts on food, family and freedom.’</p>

            <p className="paddingTop">The stories come from people of all ages, all professionals, from New York to California, New Zealand to England. And you don’t have to be Jewish to appreciate this, because with the 21st century being a much smaller world, many faiths can come together and appreciate these stories.</p>
            <h3 className="reviewsPaddingTop">Rave Reviews</h3>
            <p className="bookReviews">“My Dad recognized my interest in science and took me to the Planetarium and Tomorrow Land at Disney World. Never did I dream I’d be celebrating Hanukkah in space, aboard the spaceship Hubble.”</p>	
            <p className="bookReviewsAuthor">—Jeffrey A. Hoffman, PhD., Professor of Communications</p>
            <p className="bookReviews">“I close my eyes and think of Grandma, tasting a bit of her childhood each Hanukkah, when she prepared the latkes just as her mother had done.”</p>
            <p className="bookReviewsAuthor">—Faye Moskowitz</p>

            <div className={styles.imageContainer}>
                <Image 
                    src="/images/ABA.gif" 
                    alt="American Bookseller Association logo" 
                    width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: 'auto', height: '120px' }}
                />
                <Image 
                    src="/images/bookselling.gif" 
                    alt="American Bookseller Association" 
                    width={0} 
                    height={0} 
                    sizes="100vw"
                    style={{ width: '60%', height: 'auto' }}
                />
            </div>
            <p className="paddingTop">Warren Buffett may be the Oracle of Omaha, but Nancy Rips is Omaha’s very own Book Maven. Over the past few decades, Rips has discovered and developed unique ways to bring books to people and people to books.</p>

			<p className="paddingTop">Rips sells books in the conventional ways &ndash; currently she is on the staff of The Bookworm in Omaha &ndash; but she also advocates passionately for libraries; reviews books regularly on radio and television; speaks extensively in schools, to various groups, and at fundraisers; and organizes an annual book-themed New York City tour for Nebraskans.</p>

			<p className="paddingTop">Rips participated in a panel on Bookstore Tourism, where she explained how she partnered with a local travel agent to create memorable tours for book lovers.</p>

			<p className="paddingTop">The tours are the most recent addition to the rich book culture fostered by Rips, since she began selling books about 30 years ago when her children were small. She was hired by B. Dalton, she told BTW, in the days when job applicants “had to take a three-page test, matching titles with authors.” She passed with flying colors, worked there for 15 years, and then moved to Read All About It, an Omaha independent. When that store closed in May 2001, she joined the staff of The Bookworm, which is owned by Phil and Beth Black.</p>

		    <p className="paddingTop">The Bookworm, Rips said, “is a great full-service bookstore. People on the staff are very experienced. We know books, and we service our customers.”</p>

		    <p className="paddingTop">Rips’ handselling extends beyond the store’s four walls. She regularly reviews books for a weekly book feature on KMTV, Omaha’s CBS affiliate, and she has talked about books up and down the radio dial, including segments on Radio Disney and a monthly hour-long call-in book program on KKAR-AM. In addition, Rips teaches adult education classes at the local community college, appears often as a storyteller, and leads book discussions for many organizations.</p>
		    <p className="paddingTop">Her involvement with the Omaha Library System is the stuff of legend: Long an active member of several library boards serving as President of the Omaha Public Library Board of Trusteesand Present of the Kripke Federation Library at Omaha’s Jewish Community Center, she spearheaded efforts to save the Swanson Library Branch, which was threatened with complete closure for budgetary reasons. Rips recruited volunteers and organized rallies and a public relations campaign that resulted in complete victory. The city reversed its decision, appropriated funds to keep Swanson open, and eventually restored reduced hours at all library branches.</p>

		    <p className="paddingTop">When the Omaha library director fielded a call from an Omaha juvenile judge four years ago, she immediately put Rips in touch with him. Judge Douglas Johnson, Rips told BTW, believes that reading books will help children stay out of trouble. He requires that each child who appears before him in court sign up for a library card. Johnson wanted help from the public library to keep his courtroom filled with books. Thus Rips developed the book giveaway program for Omaha’s Juvenile Court system. Like the judge, Rips believes that books are at the core of a successful life. “If children learn how to read, they can be anything they want to be,” she told BTW.</p>

		    <p className="paddingTop">Rivkah Sass, executive director of the Omaha Public Library, told Omaha’s weekly Jewish Press, “Nancy Rips is more than a woman who loves books and reading. She is a force of nature. If we could bottle Nancy’s essence, the literacy rate in the country would be 110 percent.” &ndash; Nomi Schwartz</p>
        </div>
    );
}