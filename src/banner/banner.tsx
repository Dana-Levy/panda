import React from 'react';
import styles from './banner.module.scss';
import { Button } from '../button/button';

export interface BannerProps {
    className?: string;
}

export const Banner: React.FC<BannerProps> = ({ className }) => {
    return <div className={`${styles.root} ${className}`}>
        <h3 className={styles.TitleBanner}>Create Your Own NFT!</h3>
        <p className={styles.RunningTextBanner}>We have a large scale group to support each other in this game, Join us to get the news as soon as possible and follow our latest announcements!</p>
        <Button type="primary" disabled={false} text="Join Comunity Now" />
    </div>;
};
