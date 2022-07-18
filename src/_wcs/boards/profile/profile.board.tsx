import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Profile } from '../../../profile/profile';

export default createBoard({
    name: 'Profile',
    Board: () => <Profile />,
    environmentProps: {
        canvasWidth: 340,
        canvasBackgroundColor: '#181717',
        canvasHeight: 59
    }
});
