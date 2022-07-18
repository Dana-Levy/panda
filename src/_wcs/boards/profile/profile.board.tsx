import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Profile } from '../../../profile/profile';

export default createBoard({
    name: 'Profile',
    Board: () => <Profile imageUrl={'https://static.wixstatic.com/media/8586f3_b114d84797ad4818b011c69501c497b1~mv2.png/v1/fill/w_78,h_50,al_c,lg_1,q_85,enc_auto/8586f3_b114d84797ad4818b011c69501c497b1~mv2.png'} />,
    environmentProps: {
        canvasWidth: 340,
        canvasBackgroundColor: '#181717',
        canvasHeight: 59
    }
});
