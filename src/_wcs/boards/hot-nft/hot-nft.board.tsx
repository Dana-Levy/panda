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
        imageUrl: 'https://static.wixstatic.com/media/8586f3_a18c2bcde4784cefb1676c9e7ad063bb~mv2.png/v1/fill/w_470,h_493,al_c,lg_1,q_85,enc_auto/8586f3_a18c2bcde4784cefb1676c9e7ad063bb~mv2.png\'',
        title: 'asdas',
        userProfile: {
            eth: 'asdsad',
            imageUrl: 'asdasd',
            name: 'asd'
        }
    }, {
        imageUrl: 'https://static.wixstatic.com/media/8586f3_a18c2bcde4784cefb1676c9e7ad063bb~mv2.png/v1/fill/w_470,h_493,al_c,lg_1,q_85,enc_auto/8586f3_a18c2bcde4784cefb1676c9e7ad063bb~mv2.png\'',
        title: 'ewere',
        userProfile: {
            eth: 'fsdf',
            imageUrl: 'https://static.wixstatic.com/media/8586f3_a18c2bcde4784cefb1676c9e7ad063bb~mv2.png/v1/fill/w_470,h_493,al_c,lg_1,q_85,enc_auto/8586f3_a18c2bcde4784cefb1676c9e7ad063bb~mv2.png\'',
            name: 'fsdfsd'
        }
    }, {
        imageUrl: 'https://static.wixstatic.com/media/8586f3_a18c2bcde4784cefb1676c9e7ad063bb~mv2.png/v1/fill/w_470,h_493,al_c,lg_1,q_85,enc_auto/8586f3_a18c2bcde4784cefb1676c9e7ad063bb~mv2.png\'',
        title: 'fs',
        userProfile: {
            eth: 'sfdsf',
            imageUrl: 'https://static.wixstatic.com/media/8586f3_a18c2bcde4784cefb1676c9e7ad063bb~mv2.png/v1/fill/w_470,h_493,al_c,lg_1,q_85,enc_auto/8586f3_a18c2bcde4784cefb1676c9e7ad063bb~mv2.png\'',
            name: 'fdsf'
        }
    }, {
        imageUrl: 'https://static.wixstatic.com/media/8586f3_a18c2bcde4784cefb1676c9e7ad063bb~mv2.png/v1/fill/w_470,h_493,al_c,lg_1,q_85,enc_auto/8586f3_a18c2bcde4784cefb1676c9e7ad063bb~mv2.png\'',
        title: 'dfsdf',
        userProfile: {
            eth: 'sad',
            imageUrl: 'https://static.wixstatic.com/media/8586f3_a18c2bcde4784cefb1676c9e7ad063bb~mv2.png/v1/fill/w_470,h_493,al_c,lg_1,q_85,enc_auto/8586f3_a18c2bcde4784cefb1676c9e7ad063bb~mv2.png\'',
            name: 'das'
        }
    }, {
        imageUrl: 'https://static.wixstatic.com/media/8586f3_a18c2bcde4784cefb1676c9e7ad063bb~mv2.png/v1/fill/w_470,h_493,al_c,lg_1,q_85,enc_auto/8586f3_a18c2bcde4784cefb1676c9e7ad063bb~mv2.png\'',
        title: 'dfaa',
        userProfile: {
            eth: 'dfd',
            imageUrl: 'https://static.wixstatic.com/media/8586f3_a18c2bcde4784cefb1676c9e7ad063bb~mv2.png/v1/fill/w_470,h_493,al_c,lg_1,q_85,enc_auto/8586f3_a18c2bcde4784cefb1676c9e7ad063bb~mv2.png\'',
            name: 'sf'
        }
    },]} />,
    environmentProps: {
        canvasHeight: 1964,
        windowHeight: 1353,
        windowWidth: 1510,
        canvasBackgroundColor: '#252323'
    }
});
