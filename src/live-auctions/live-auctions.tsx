import React from 'react';
import styles from './live-auctions.module.scss';
import { Card } from '../card/card';
import { Button } from '../button/button';

export interface LiveAuctionsProps {
    className?: string;
}

export const LiveAuctions: React.FC<LiveAuctionsProps> = ({ className }) => {
    return <div className={`${styles.root} ${className}`}>
        <div className={styles.TitleAction}>
            <h3 className={styles.Title}>Heading 3</h3>
            <Button disabled={false} type="secondary" text={'View More'} /></div>
        <div className={styles.ContainerLiveAuctions}>
            <Card />
            <Card />
            <Card />
        </div></div>;
};
