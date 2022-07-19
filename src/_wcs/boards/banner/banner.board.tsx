import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Banner } from '../../../banner/banner';

export default createBoard({
    name: 'Banner',
    Board: () => <Banner />
});
