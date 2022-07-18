import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { TopMenu } from '../../../top-menu/top-menu';

export default createBoard({
    name: 'TopMenu',
    Board: () => <TopMenu />,
    environmentProps: {
        canvasWidth: 1062,
        windowWidth: 1318,
        windowBackgroundColor: '#181717'
    }
});
