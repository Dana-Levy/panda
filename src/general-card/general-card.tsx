import React from 'react';
import styles from './general-card.module.scss';
import { IconCard } from '../icon-card/icon-card';

export interface GeneralCardProps {
    className?: string;
    title?:string;
    runningText?:string;
}

export const GeneralCard: React.FC<GeneralCardProps> = ({title,runningText}) => {
    return <div className={styles.root}>
        <IconCard imageUrl={'https://static.wixstatic.com/media/8586f3_8e90958f6eed47f48535117e9fe901eb~mv2.png/v1/fill/w_95,h_95,al_c,lg_1,q_85,enc_auto/Monitor.png'} />
        <h5 className={styles.Title}>{title}</h5>
        <p className={styles.Paragraphy}>{runningText}</p></div>;
};
