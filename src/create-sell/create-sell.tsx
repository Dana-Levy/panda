import React from 'react';
import styles from './create-sell.module.scss';
import { GeneralCard } from '../general-card/general-card';

export interface CreateSellProps {
    className?: string;
}

export const CreateSell: React.FC<CreateSellProps> = ({ className }) => {
    return <div className={`${styles.root} ${className}`}>
        <h3 className={styles.Title}>Create and sell your NFTs</h3>
        <div className={styles.CardsContainer}>
            <GeneralCard runningText={'Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.'} title={'Set up your wallet'} />
            <GeneralCard title={'Add your NFTs'} runningText={'Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.'} />
            <GeneralCard title="List them for sale" runningText="Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner." />
        </div></div>;
};
