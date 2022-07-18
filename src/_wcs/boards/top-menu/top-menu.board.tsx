import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { TopMenu } from '../../../top-menu/top-menu';

export default createBoard({
    name: 'TopMenu',
    Board: () => <TopMenu />,
    environmentProps: {
        canvasWidth: 838,
        windowWidth: 1004
    }
});
