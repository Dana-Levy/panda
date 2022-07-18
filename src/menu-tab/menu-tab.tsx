import React from 'react';
import styles from './menu-tab.module.scss';

export type menuItem = {text: string, link?: string};

export interface MenuTabProps {
    className?: string;
    item: menuItem;
}

export const MenuTab: React.FC<MenuTabProps> = ({ className, item }) => {
    return <div className={`${styles.root} ${className}`}>
        <a className={styles.ParagraphSemibold} href={item.link}>{item.text}</a></div>;
};