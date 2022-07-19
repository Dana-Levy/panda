import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Cover } from '../../../cover/cover';

export default createBoard({
    name: 'Cover',
    Board: () => <Cover />,
    environmentProps: {
        windowWidth: 1192,
        canvasBackgroundColor: '#252323'
    }
});
