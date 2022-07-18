import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Button } from '../../../button/button';

export default createBoard({
    name: 'Button',
    Board: () => <Button type="primary" text={''} disabled={false} />,
    environmentProps: {
        windowBackgroundColor: '#040404'
    }
});
