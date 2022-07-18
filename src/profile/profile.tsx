import React from 'react';
import styles from './profile.module.scss';

export interface ProfileProps {
    className?: string;
}

export const Profile: React.FC<ProfileProps> = ({ className }) => {
    return <div className={`${styles.root} ${className}`}>
        <div className={styles.ProfilePic}>
            <img src="https://wixplosives.github.io/wcs-assets-storage/add-panel/image-placeholder.jpg" className={styles.image} /></div>
        <div className={styles.CreatorContainer}>
            <p className={styles.Creator}>Creator</p>
            <p className={styles.CreatorName}>This is a paragraph.</p>
        </div>
    </div>;
};
