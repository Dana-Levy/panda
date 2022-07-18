import React from 'react';
import styles from './top-menu.module.scss';
import { PandaLogo } from '../panda-logo/panda-logo';
import { MenuTab } from '../menu-tab/menu-tab';
import { Button } from '../button/button';

export interface TopMenuProps {
    className?: string;
}

const links = [{name: 'Home'},{name: 'Discover'},{name: 'Docs'},{name: 'Blog'},{name: 'About Us'},{name: 'Contact Us'}]

export const TopMenu: React.FC<TopMenuProps> = ({ className }) => {
    return <div className={`${styles.root} ${className}`}>
        <PandaLogo />
        <div className={styles.TabsContainer}>
            {links.map(link => <MenuTab name={link.name} />)}
        </div>
        <Button text={'Connect Wallet'} type="secondary" disabled={false} />
    </div>;
};
