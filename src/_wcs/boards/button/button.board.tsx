import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Button } from '../../../button/button';

export default createBoard({
    name: 'Button',
    Board: () => <Button />,
    environmentProps: {
        windowBackgroundColor: '#040404'
    }
});
