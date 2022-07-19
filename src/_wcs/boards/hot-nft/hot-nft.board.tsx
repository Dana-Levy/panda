import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { HotNFT } from '../../../hot-nft/hot-nft';

export default createBoard({
    name: 'HotNFT',
    Board: () => <HotNFT cards={[{
        imageUrl: 'https://static.wixstatic.com/media/8586f3_bbb7b79ec4c240f19d3be2ce4c48cc46~mv2.png/v1/fill/w_470,h_493,al_c,lg_1,q_85,enc_auto/8586f3_bbb7b79ec4c240f19d3be2ce4c48cc46~mv2.png',
        title: 'Azuki Demon',
        userProfile: {
            eth: '3,600',
            imageUrl: 'https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg',
            name: 'Lillie A. Woods'
        }
    }, {
        imageUrl: 'https://static.wixstatic.com/media/8586f3_9fe6aefa717140e397874a0ecd22d489~mv2.png/v1/fill/w_470,h_493,al_c,lg_1,q_85,enc_auto/8586f3_9fe6aefa717140e397874a0ecd22d489~mv2.png',
        title: 'Mutant CloneX\'',
        userProfile: {
            eth: '5,8000',
            imageUrl: 'https://media.istockphoto.com/vectors/beautiful-woman-wearing-eyeglasses-vector-id683976616?k=20&m=683976616&s=170667a&w=0&h=RnvrANF0Xs5p26vVYkmfB1QqSmN92IEckEM8G-PqzNg=',
            name: 'Peggy J. Hag'
        }
    }, {
        imageUrl: 'https://static.wixstatic.com/media/8586f3_03fe58076f254140aed1d31ac61ffb30~mv2.png/v1/fill/w_470,h_493,al_c,lg_1,q_85,enc_auto/8586f3_03fe58076f254140aed1d31ac61ffb30~mv2.png\'',
        title: 'ewere',
        userProfile: {
            eth: '8,900',
            imageUrl: 'https://t4.ftcdn.net/jpg/02/85/41/33/360_F_285413382_dFQggmiG5gytAEgIpDRhQ10Wyp792iRV.jpg',
            name: 'April T. Ross'
        }
    }, {
        imageUrl: 'https://static.wixstatic.com/media/8586f3_a18c2bcde4784cefb1676c9e7ad063bb~mv2.png/v1/fill/w_470,h_493,al_c,lg_1,q_85,enc_auto/8586f3_a18c2bcde4784cefb1676c9e7ad063bb~mv2.png\'',
        title: 'Dove of Peace',
        userProfile: {
            eth: '3,470',
            imageUrl: 'https://as2.ftcdn.net/v2/jpg/02/78/96/47/1000_F_278964721_bkw9IYOfr1JhKKTfzyVFM1nGZOVajDUB.jpg',
            name: 'James L. Thra'
        }
    }, {
        imageUrl: 'https://static.wixstatic.com/media/8586f3_9c2a0fe283a94fbc8f93e88af1110921~mv2.png/v1/fill/w_470,h_493,al_c,lg_1,q_85,enc_auto/8586f3_9c2a0fe283a94fbc8f93e88af1110921~mv2.png',
        title: 'Turtle United',
        userProfile: {
            eth: '67,030',
            imageUrl: 'https://as2.ftcdn.net/v2/jpg/02/43/87/41/1000_F_243874126_YLSIGaDgoNzS91Xdbg1IVpiwXeeZSXdr.jpg',
            name: 'Linda B. Gada'
        }
    }, {
        imageUrl: 'https://static.wixstatic.com/media/8586f3_07700298c90542b792c95c148e90042e~mv2.png/v1/fill/w_470,h_493,al_c,lg_1,q_85,enc_auto/8586f3_07700298c90542b792c95c148e90042e~mv2.png\'',
        title: 'Desi Baby Club',
        userProfile: {
            eth: '23,4000',
            imageUrl: 'https://as1.ftcdn.net/v2/jpg/03/08/77/90/1000_F_308779037_iftiqKoqVTDzTnG4t8SSnwnb4s6qRG20.jpg',
            name: 'Dennis K. Pa'
        }
    },]} />,
    environmentProps: {
        canvasHeight: 1964,
        windowHeight: 1353,
        windowWidth: 1510,
        canvasBackgroundColor: '#252323'
    }
});
