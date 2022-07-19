import React from 'react';
import styles from './cover.module.scss';
import { Button } from '../button/button';
import { Card } from '../card/card';

export interface CoverProps {
    className?: string;
}

export const Cover: React.FC<CoverProps> = ({ className }) => {
    return <div className={`${styles.root} ${className}`}>
        <div className={styles.TextContainer}>
            <h2 className={styles.Titleh2}>Discover a New Era of Crypto Currency</h2>
            <p className={styles.RunningTextCover}>Panda NFT is the primier marketplace for NFT, which are digital items you can truly own. Digital items have existed for a long time, but never like this.</p>
            <Button disabled={false} type="primary" text={'Get Started'} /></div>
        <div className={styles.CardsContainer}>
            <div className={styles.Coverimage1}>
                <img src="https://static.wixstatic.com/media/8586f3_f84d09a0c9864dc992f19c18d680913f~mv2.png/v1/fill/w_480,h_643,al_c,lg_1,q_85,enc_auto/8586f3_f84d09a0c9864dc992f19c18d680913f~mv2.png" className={styles.CoverCard1} />
            </div>
            <div className={styles.Coverimage2}>
                <img src="https://static.wixstatic.com/media/8586f3_46d75c4c041545c09024fa2737b8a507~mv2.png/v1/fill/w_300,h_560,al_c,lg_1,q_85,enc_auto/8586f3_46d75c4c041545c09024fa2737b8a507~mv2.png" className={styles.CoverCard2} />
            </div></div></div>;
};
