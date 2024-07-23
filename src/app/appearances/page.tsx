import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";

export default function AppearancesPage() {
    return (
        <div className="content appearances fullWidthContent">
            <h1>Appearances</h1>
            <div className="container">
                <div className="twoThirds">
                    <Image 
                        src="/images/DaveWingert_radio.jpg" 
                        alt="Dave Wingert and Nancy Rips" 
                        width={0} 
                        height={0} 
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                    />
                    <p className={styles.caption}>Boomer Radio, Nancy Rips and Dave Wingert</p>
                </div>
                <div className="oneThird">
                    <p className={styles.list}>National media attention</p>
                    <p className={styles.list}>National/local review and print attention</p>
                    <p className={styles.list}>Print and online review features</p>
                    <p className={styles.list}>Author appearances on TV/radio</p>
                    <p className={styles.list}>Online marketing outreach</p>
                    <p className={styles.list}>Prepub consumer outreach</p>
                </div>
            </div>
        </div>
    );
}