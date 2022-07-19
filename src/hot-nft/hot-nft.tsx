import React from 'react';
import styles from './hot-nft.module.scss';
import { Card, CardProps } from '../card/card';
import { Button } from '../button/button';
import { userProfile as userProfileType} from '../profile/profile';

export interface HotNFTProps {
    className?: string;
    cards: Array<{title: string, imageUrl: string, userProfile: userProfileType}>
}

export const HotNFT: React.FC<HotNFTProps> = ({ className, cards }) => {
    return <div className={`${styles.root} ${className}`}>
        <div className={styles.TitleContainer}>
            <h3 className={styles.TitleNFT}>Hot NFTs</h3>
            <div className={styles.ButtonsContainer}>
                <Button text={'Art'} />
                <Button text={'Music'} type="secondary" />
                <Button text={'Music'} type="secondary" />
            </div></div>
        <div className={styles.GrigContainer}>
            {
                cards.map(({title,imageUrl,userProfile}) => {
                    return (
                        <Card title={title} imageUrl={imageUrl} profile={{eth: userProfile.eth,  imageUrl: userProfile!.imageUrl, name: userProfile!.name}} />
                    )
                })
            }
        </div></div>;
};
