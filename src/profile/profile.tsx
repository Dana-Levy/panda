import React from 'react';
import styles from './profile.module.scss';

export interface ProfileProps {
    className?: string;
    imageUrl: string;
}

export const Profile: React.FC<ProfileProps> = ({ className, imageUrl }) => {
    return <div className={`${styles.root} ${className}`}>
        <div className={styles.ProfilePic}>
            <img src={imageUrl} className={styles.image} /></div>
        <div className={styles.CreatorContainer}>
            <p className={styles.Creator}>Creator</p>
            <p className={styles.CreatorName}>SalvadorDali</p>
        </div>
        <div className={styles.BidContainer}>
            <p className={styles.Current}>Current Bid</p>
            <p className={styles.eth}>4.89 eTH</p>
        </div>
    </div>;
};
