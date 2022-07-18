import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { CreateSell } from '../../../create-sell/create-sell';

export default createBoard({
    name: 'CreateSell',
    Board: () => <CreateSell />,
    environmentProps: {
        canvasBackgroundColor: '#1e1e1e'
    }
});
