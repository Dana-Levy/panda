import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { HotNFT } from '../../../hot-nft/hot-nft';

export default createBoard({
    name: 'HotNFT',
    Board: () => <HotNFT cards={[{
        imageUrl: 'https://static.wixstatic.com/media/8586f3_bbb7b79ec4c240f19d3be2ce4c48cc46~mv2.png/v1/fill/w_470,h_493,al_c,lg_1,q_85,enc_auto/8586f3_bbb7b79ec4c240f19d3be2ce4c48cc46~mv2.png',
        title: 'Azuki Demon',
        userProfile: {
            eth: '122',
            imageUrl: 'sdas',
            name: 'asdas'
        }
    }, {
        imageUrl: 'asdas',
        title: 'asdas',
        userProfile: {
            eth: 'asdsad',
            imageUrl: 'asdasd',
            name: 'asd'
        }
    }]} />,
    environmentProps: {
        canvasHeight: 1964,
        windowHeight: 1125,
        windowWidth: 1510,
        canvasBackgroundColor: '#252323'
    }
});
