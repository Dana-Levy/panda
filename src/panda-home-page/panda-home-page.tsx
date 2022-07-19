import React from 'react';
import styles from './panda-home-page.module.scss';
import { TopMenu } from '../top-menu/top-menu';
import { Cover } from '../cover/cover';
import { CreateSell } from '../create-sell/create-sell';
import { LiveAuctions } from '../live-auctions/live-auctions';

export interface PandaHomePageProps {
    className?: string;
}

export const PandaHomePage: React.FC<PandaHomePageProps> = ({ className }) => {
    return <div className={`${styles.root} ${className}`}>
        <TopMenu items={[{
            text: 'Home'
        }, {
            text: 'Discover'
        }, {
            text: 'Docs'
        }, {
            text: 'Blog'
        }, {
            text: 'About Us'
        }, {
            text: 'Contact Us'
        }]} />
        <Cover className={styles.MainCover} />
        <CreateSell className={styles.MainCreatSell} />
        <LiveAuctions cards={[{
        }, {
        }, {
        }]} />
    </div>;
};
