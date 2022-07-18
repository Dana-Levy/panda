import React from 'react';
import styles from './menu-tab.module.scss';

export interface MenuTabProps {
    className?: string;
    name: string;
}

export const MenuTab: React.FC<MenuTabProps> = ({ className, name }) => {
    return <div className={`${styles.root} ${className}`}>
        <p className={styles.ParagraphSemibold}>{name}</p></div>;
};
