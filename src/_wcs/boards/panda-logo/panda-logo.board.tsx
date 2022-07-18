import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { PandaLogo } from '../../../panda-logo/panda-logo';


export default createBoard({
    name: 'PandaLogo',
    Board: () => <PandaLogo />
});
