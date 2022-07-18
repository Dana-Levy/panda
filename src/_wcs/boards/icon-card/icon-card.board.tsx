import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { IconCard } from '../../../icon-card/icon-card';

export default createBoard({
    name: 'IconCard',
    Board: () => <IconCard imageUrl={'https://static.wixstatic.com/media/8586f3_8e90958f6eed47f48535117e9fe901eb~mv2.png/v1/fill/w_95,h_95,al_c,lg_1,q_85,enc_auto/Monitor.png'} />
});
