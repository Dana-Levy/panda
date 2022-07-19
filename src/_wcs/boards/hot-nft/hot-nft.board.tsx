import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { HotNFT } from '../../../hot-nft/hot-nft';

export default createBoard({
    name: 'HotNFT',
    Board: () => <HotNFT />,
    environmentProps: {
        canvasHeight: 1964,
        windowHeight: 1125,
        windowWidth: 1510,
        canvasBackgroundColor: '#252323'
    }
});
