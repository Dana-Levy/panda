import React from 'react';
import styles from './live-auctions.module.scss';
import { Card, CardProps } from '../card/card';
import { Button } from '../button/button';
import { userProfile as userProfileType} from '../profile/profile';

export interface LiveAuctionsProps {
    className?: string;
    cards: Array<{title: string, imageUrl: string, userProfile: userProfileType}>
}

export const LiveAuctions: React.FC<LiveAuctionsProps> = ({ className, cards }) => {
    return <div className={`${styles.root} ${className}`}>
        <div className={styles.TitleAction}>
            <h3 className={styles.Title}>Live Auctions</h3>
            <Button disabled={false} type="secondary" text={'View More'} /></div>
        <div className={styles.ContainerLiveAuctions}>
                        {
                cards.map(({title, imageUrl, userProfile}) => {
                    return (
                        <Card title={title} imageUrl={imageUrl} profile={{eth: userProfile.eth,  imageUrl: userProfile!.imageUrl, name: userProfile!.name}} />
                    )
                })
            }
        </div></div>;
};
