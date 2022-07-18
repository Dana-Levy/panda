import React from 'react';
import styles from './card.module.scss';
import { Profile } from '../profile/profile';
import { Tag } from '../tag/tag';

export interface CardProps {
    className?: string;
    title:string;
}

export const Card: React.FC<CardProps> = ({ className,title}) => {
    return <div className={`${styles.root} ${className}`}>
        <div className={styles.imageContainer}>
            <img src="https://static.wixstatic.com/media/8586f3_6bc9a9458b9d40b4a0029aef96d5babe~mv2.png/v1/fill/w_470,h_300,al_c,lg_1,q_85,enc_auto/8586f3_6bc9a9458b9d40b4a0029aef96d5babe~mv2.png" className={styles.image} />
        </div>
        <div className={styles.TitleContainer}>
            <h1 className={styles.TilteCard}>{title}</h1>
            <Tag /></div>
        <Profile eth={'4.89 eTH'} imageUrl={'https://static.wixstatic.com/media/8586f3_b114d84797ad4818b011c69501c497b1~mv2.png/v1/fill/w_78,h_50,al_c,lg_1,q_85,enc_auto/8586f3_b114d84797ad4818b011c69501c497b1~mv2.png'} name={'SalvadorDali'} />
    </div>;
};
