import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { GeneralCard } from '../../../general-card/general-card';

export default createBoard({
    name: 'GeneralCard',
    Board: () => <GeneralCard title={'Set up your wallet'} runningText={'Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.'} />
});
