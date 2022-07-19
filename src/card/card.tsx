import React from 'react';
import styles from './card.module.scss';
import { Profile, userProfile as userProfileType} from '../profile/profile';
import { Tag } from '../tag/tag';
import { Button } from '../button/button';
import {useState} from 'react';

export interface CardProps {
    className?: string;
    title: string;
    imageUrl: string;
    profile?: userProfileType;
}

export const Card: React.FC<CardProps> = ({ className, title, imageUrl, profile}) => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return <div className={`${styles.root} ${className}`}>
        
        <div className={styles.imageContainer} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <img src={imageUrl} className={styles.image} />
             {isHovering && (   
                <Button text="Place a Bid" type="primary" disabled={false} className={styles.placeAbid} />
            )}
        </div>
        <div className={styles.TitleContainer}>
            <h1 className={styles.TilteCard}>{title}</h1>
            <Tag /></div>
        <Profile eth={profile!.eth} imageUrl={profile!.imageUrl} name={profile!.name} />
    </div>;
};
