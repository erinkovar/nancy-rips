import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./books.module.scss";

export default function BooksPage() {
    return (
        <div className={styles.booksContainer}>
            <div className={styles.bookSectionLeft}>
                <div className={styles.bookImage}>
                    <Link href="/books/buffett-isms-guide-to-life">
                        <Image 
                            src="/images/buffett-isms-cover-front.png" 
                            alt="Buffett-isms front of book cover" 
                            width={0} 
                            height={0} 
                            sizes="100vw"
                            className="bookHover"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Link>
                </div>
                <div className={styles.bookContent}>
                    <h1>BRAND NEW!</h1>
                    <h2>Buffett-isms! The ABC Guide to Life</h2>
                    <p>Pre-order at <Link href="mailto:info@bookwormomaha.com">info@bookwormomaha.com</Link></p>
                </div>
            </div>
            <div className={styles.bookCovers}>
                <div className={styles.cover}>
                    <Link href="/books/new-berkshire-abc">
                        <Image 
                            src="/images/cover-new_berkshire_abc-front.jpg" 
                            alt="My New Berkshire ABC front of book cover" 
                            width={0} 
                            height={0} 
                            sizes="100vw"
                            className="bookHover"
                            style={{ width: 'auto', height: '230px' }}
                        />
                    </Link>
                    <h5><Link href="/books/new-berkshire-abc" className={styles.bookTitle}>My New Berkshire ABC</Link></h5>
                </div>
                <div className={styles.cover}>
                    <Link href="/books/noah-eight-trucks-of-hanukkah">
                        <Image 
                            src="/images/cover_noah.jpg" 
                            alt="Noah and the Eight Trucks of Hannukah front of book cover" 
                            width={0} 
                            height={0} 
                            sizes="100vw"
                            className="bookHover"
                            style={{ width: 'auto', height: '230px' }}
                        />
                    </Link>
                    <h5><Link href="/books/noah-eight-trucks-of-hanukkah" className={styles.bookTitle}>Noah and the Eight Trucks of Hanukkah</Link></h5>
                </div>
                <div className={styles.cover}>
                    <Link href="/books/first-berkshire-abc">
                        <Image 
                            src="/images/cover_myfirstberkshire.png" 
                            alt="My First Berkshire ABC front of book cover" 
                            width={0} 
                            height={0} 
                            sizes="100vw"
                            className="bookHover"
                            style={{ width: 'auto', height: '230px' }}
                        />
                    </Link>
                    <h5><Link href="/books/first-berkshire-abc" className={styles.bookTitle}>My First Berkshire ABC</Link></h5>
                </div>
                <div className={styles.cover}>
                    <Link href="/books/hanukkah-stories">
                        <Image 
                            src="/images/cover_hanukkahstories.gif" 
                            alt="Hanukkah Stories front of book cover" 
                            width={0} 
                            height={0} 
                            sizes="100vw"
                            className="bookHover"
                            style={{ width: 'auto', height: '230px' }}
                        />
                    </Link>
                    <h5><Link href="/books/hanukkah-stories">Hanukkah Stories</Link></h5>
                </div>
                <div className={styles.cover}>
                    <Link href="/books/high-holiday-stories">
                        <Image 
                            src="/images/cover_highholidaystories.gif" 
                            alt="High Holiday Stories front of book cover" 
                            width={0} 
                            height={0} 
                            sizes="100vw"
                            className="bookHover"
                            style={{ width: 'auto', height: '230px' }}
                        />
                    </Link>
                    <h5><Link href="/books/high-holiday-stories">High Holiday Stories</Link></h5>
                </div>
                <div className={styles.cover}>
                    <Link href="/books/seder-stories">
                        <Image 
                            src="/images/cover_seder.jpeg" 
                            alt="Seder Stories front of book cover"  
                            width={0} 
                            height={0} 
                            sizes="100vw"
                            className="bookHover"
                            style={{ width: 'auto', height: '230px' }}
                        />
                    </Link>
                    <h5><Link href="/books/seder-stories">Seder Stories</Link></h5>
                </div>
            </div>
        </div>
    );
}