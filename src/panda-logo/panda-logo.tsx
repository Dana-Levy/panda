import React from 'react';
import styles from './panda-logo.module.scss';

export interface PandaLogoProps {
    className?: string;
}

export const PandaLogo: React.FC<PandaLogoProps> = ({ className }) => {
    return <div className={`${styles.root} ${className}`}>
        <div className={styles.LogoLayout}>
            <div className={styles.Loog}>
                <img src="https://static.wixstatic.com/media/8586f3_4bb005863d3e48b299735378abb08cd4~mv2.png/v1/fill/w_60,h_56,al_c,lg_1,q_85,enc_auto/8586f3_4bb005863d3e48b299735378abb08cd4~mv2.png" className={styles.Image} />
            </div>
            <p className={styles.LogoText}>Panda NFT</p></div></div>;
};
