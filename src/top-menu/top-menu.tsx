import React from 'react';
import styles from './top-menu.module.scss';
import { PandaLogo } from '../panda-logo/panda-logo';
import { MenuTab } from '../menu-tab/menu-tab';

export interface TopMenuProps {
    className?: string;
}

export const TopMenu: React.FC<TopMenuProps> = ({ className }) => {
    return <div className={`${styles.root} ${className}`}>
        <PandaLogo />
        <div className={styles.TabsContainer}>
            <MenuTab />
            <MenuTab />
            <MenuTab />
            <MenuTab />
            <MenuTab />
            <MenuTab className="" />
        </div></div>;
};
