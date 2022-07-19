import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { LiveAuctions } from '../../../live-auctions/live-auctions';

export default createBoard({
    name: 'LiveAuctions',
    Board: () => <LiveAuctions cards={[{
        imageUrl: 'adas',
        title: 'asdsa',
        userProfile: {
            eth: 'asdsa',
            imageUrl: 'asd',
            name: 'asd'
        }
    }, {
        imageUrl: 'asdas',
        title: 'asdas',
        userProfile: {
            eth: 'asdas',
            imageUrl: 'asdsa',
            name: 'asdsa'
        }
    }]} />,
    environmentProps: {
        windowBackgroundColor: '#181818',
        windowWidth: 1300,
        windowHeight: 686,
        canvasHeight: 901
    }
});
