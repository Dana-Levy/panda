import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Button } from '../../../button/button';

export default createBoard({
    name: 'Button',
    Board: () => <Button type="secondary" text={'Button'} disabled={false} />,
    environmentProps: {
        windowBackgroundColor: '#ffffff',
        canvasBackgroundColor: '#000000',
        canvasWidth: 175
    }
});
