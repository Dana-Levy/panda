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
            <h3 className={styles.Title}>Live Auctions</h3>
            <Button disabled={false} type="secondary" text={'View More'} /></div>
        <div className={styles.ContainerLiveAuctions}>
            <Card title={'"Hamlet Contemplates ...'} imageUrl={'https://static.wixstatic.com/media/8586f3_6bc9a9458b9d40b4a0029aef96d5babe~mv2.png/v1/fill/w_470,h_300,al_c,lg_1,q_85,enc_auto/8586f3_6bc9a9458b9d40b4a0029aef96d5babe~mv2.png'} />
            <Card title="&quot;Hamlet Contemplates ..." imageUrl="https://static.wixstatic.com/media/8586f3_69ef1de7fcce440c8204df402b7bf6e9~mv2.png/v1/fill/w_470,h_300,al_c,lg_1,q_85,enc_auto/8586f3_69ef1de7fcce440c8204df402b7bf6e9~mv2.png" />
            <Card title="&quot;Hamlet Contemplates ..." imageUrl="https://static.wixstatic.com/media/8586f3_a12c5f023f264be385217a1d42263162~mv2.png/v1/fill/w_470,h_300,al_c,lg_1,q_85,enc_auto/8586f3_a12c5f023f264be385217a1d42263162~mv2.png" />
        </div></div>;
};
