import React from 'react';
import styles from './top-menu.module.scss';
import { PandaLogo } from '../panda-logo/panda-logo';
import { MenuTab, menuItem as menuItemType } from '../menu-tab/menu-tab';
import { Button } from '../button/button';

export interface TopMenuProps {
    className?: string;
    items: menuItemType[];
}

// const links = [{ item: { text: 'Home' } }, { name: 'Discover' }, { name: 'Docs' }, { name: 'Blog' }, { name: 'About Us' }, { name: 'Contact Us' }]

export const TopMenu: React.FC<TopMenuProps> = ({ className, items }) => {
    return <div className={`${styles.root} ${className}`}>
        <PandaLogo />
        <div className={styles.TabsContainer}>
            {
                items.map(item => {
                    return (
                        <MenuTab item={{text: item.text, link: item.link}} />
                    )
                })
            }
        </div>
        <Button text={'Connect Wallet'} type="secondary" disabled={false} />
    </div>;
};
