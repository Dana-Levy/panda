import React from 'react';
import styles from './profile.module.scss';

export interface ProfileProps {
    className?: string;
    imageUrl: string;
    name: string;
    eth: string;
}

export const Profile: React.FC<ProfileProps> = ({ name, eth, className, imageUrl }) => {
    return <div className={`${styles.root} ${className}`}>
        <div className={styles.ProfilePic}>
            <img src={imageUrl} className={styles.image} /></div>
        <div className={styles.CreatorContainer}>
            <p className={styles.Creator}>Creator</p></div>
        <div className={styles.BidContainer}>
            <p className={styles.Current}>Current Bid</p>
            <p className={styles.eth}>{eth}</p>
        </div>
    </div>;
};
