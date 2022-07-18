import React from 'react';
import styles from './profile.module.scss';

export interface ProfileProps {
    className?: string;
}

export const Profile: React.FC<ProfileProps> = ({ className }) => {
    return <div className={`${styles.root} ${className}`}>
        <div>
            <img src="https://wixplosives.github.io/wcs-assets-storage/add-panel/image-placeholder.jpg" /></div>
        <div>
            <p>This is a paragraph.</p>
            <p>This is a paragraph.</p>
        </div>
    </div>;
};
