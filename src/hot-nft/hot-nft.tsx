import React from 'react';
import styles from './hot-nft.module.scss';
import { Card } from '../card/card';
import { Button } from '../button/button';

export interface HotNFTProps {
    className?: string;
}

export const HotNFT: React.FC<HotNFTProps> = ({ className }) => {
    return <div className={`${styles.root} ${className}`}>
        <div className={styles.TitleContainer}>
            <h3 className={styles.TitleNFT}>Hot NFTs</h3>
            <div className={styles.ButtonsContainer}>
                <Button text={'Art'} />
                <Button text={'Music'} type="secondary" />
                <Button text={'Music'} type="secondary" />
            </div></div>
        <div className={styles.GrigContainer}>
            <Card imageUrl={'https://static.wixstatic.com/media/8586f3_bbb7b79ec4c240f19d3be2ce4c48cc46~mv2.png/v1/fill/w_470,h_493,al_c,lg_1,q_85,enc_auto/8586f3_bbb7b79ec4c240f19d3be2ce4c48cc46~mv2.png'} title={'Azuki Demon'} />
            <Card imageUrl={'https://static.wixstatic.com/media/8586f3_9fe6aefa717140e397874a0ecd22d489~mv2.png/v1/fill/w_470,h_493,al_c,lg_1,q_85,enc_auto/8586f3_9fe6aefa717140e397874a0ecd22d489~mv2.png'} title={'Mekarim NFT'} />
            <Card imageUrl={'https://static.wixstatic.com/media/8586f3_03fe58076f254140aed1d31ac61ffb30~mv2.png/v1/fill/w_470,h_493,al_c,lg_1,q_85,enc_auto/8586f3_03fe58076f254140aed1d31ac61ffb30~mv2.png'} title={'Mutant CloneX'} />
            <Card imageUrl={'https://static.wixstatic.com/media/8586f3_a18c2bcde4784cefb1676c9e7ad063bb~mv2.png/v1/fill/w_470,h_493,al_c,lg_1,q_85,enc_auto/8586f3_a18c2bcde4784cefb1676c9e7ad063bb~mv2.png'} title="Dove of Peace" />
            <Card imageUrl={'https://static.wixstatic.com/media/8586f3_9c2a0fe283a94fbc8f93e88af1110921~mv2.png/v1/fill/w_470,h_493,al_c,lg_1,q_85,enc_auto/8586f3_9c2a0fe283a94fbc8f93e88af1110921~mv2.png'} title={'Turtle United'} />
            <Card imageUrl={'https://static.wixstatic.com/media/8586f3_07700298c90542b792c95c148e90042e~mv2.png/v1/fill/w_470,h_493,al_c,lg_1,q_85,enc_auto/8586f3_07700298c90542b792c95c148e90042e~mv2.png'} title={'Desi Baby Club'} />
        </div></div>;
};
