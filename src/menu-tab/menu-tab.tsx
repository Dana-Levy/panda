import React from 'react';
import styles from './menu-tab.module.scss';

export interface MenuTabProps {
    className?: string;
}

export const MenuTab: React.FC<MenuTabProps> = ({ className }) => {
    return <div className={`${styles.root} ${className}`}>MenuTab</div>;
};
