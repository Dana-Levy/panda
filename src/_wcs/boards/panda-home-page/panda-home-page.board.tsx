import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { PandaHomePage } from '../../../panda-home-page/panda-home-page';

export default createBoard({
    name: 'PandaHomePage',
    Board: () => <PandaHomePage />,
    environmentProps: {
        windowWidth: 1440,
        windowHeight: 1000,
        canvasBackgroundColor: '#030610',
        canvasWidth: 1440,
        canvasHeight: 40,
        windowBackgroundColor: '#030610'
    }
});
