import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { LiveAuctions } from '../../../live-auctions/live-auctions';

export default createBoard({
    name: 'LiveAuctions',
    Board: () => <LiveAuctions cards={[{
        imageUrl: 'https://cdn.dribbble.com/users/478776/screenshots/15848026/media/390616e204b172f6d12be4b010dd4c45.jpg',
        title: 'Abstract shape',
        userProfile: {
            eth: '45,800',
            imageUrl: 'https://as1.ftcdn.net/v2/jpg/02/63/94/46/1000_F_263944611_QyVwaC0iqV8w1y3LKKgRt6YK6CzQINAY.jpg',
            name: 'Kathleen Hol'
        }
    }, {
        imageUrl: 'https://cdn.dribbble.com/users/2733/screenshots/15395717/media/3ba43d9130175a90ae51b3e706efdaa1.png',
        title: 'Mirror texture',
        userProfile: {
            eth: '100,000',
            imageUrl: 'https://as1.ftcdn.net/v2/jpg/02/63/61/20/1000_F_263612008_bOk8W3CReHOLWjk4Wut1dRcOnblUeB76.jpg',
            name: 'Jamika R. W'
        }
    }, {
        imageUrl: 'https://cdn.dribbble.com/users/2733/screenshots/15581498/media/d653afda3ef180c70688b82811f0c44f.png',
        title: 'Mastermind',
        userProfile: {
            eth: '35,678',
            name: 'Ann J. Artm',
            imageUrl: 'https://as1.ftcdn.net/v2/jpg/02/83/95/08/1000_F_283950818_QXty1OepVWurGeHWty4oOy8Ega3WXYzo.jpg'
        }
    }]} />,
    environmentProps: {
        windowBackgroundColor: '#181818',
        windowWidth: 1300,
        windowHeight: 686,
        canvasHeight: 901
    }
});
