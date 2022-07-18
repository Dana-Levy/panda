import React from 'react';
import styles from './icon-card.module.scss';

export interface IconCardProps {
    className?: string;
    imageUrl: string;
}

export const IconCard: React.FC<IconCardProps> = ({ className, imageUrl }) => {
    return <div className={`${styles.root} ${className}`}>
        <div className={styles.ImageContainer}>
            <div className={styles.Image}>
                <img src={imageUrl} className={styles.Imagesize} />
            </div>
        </div></div>;
};
