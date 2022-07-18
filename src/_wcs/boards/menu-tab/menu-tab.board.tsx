import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { MenuTab } from '../../../menu-tab/menu-tab';

export default createBoard({
    name: 'MenuTab',
    Board: () => <MenuTab item={{
        text: 'Hello',
        link: 'https://ynet.co.il'
    }} />,
    environmentProps: {
        canvasHeight: 35,
        canvasBackgroundColor: '#120f0f'
    }
});
