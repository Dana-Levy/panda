import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { TopMenu } from '../../../top-menu/top-menu';

export default createBoard({
    name: 'TopMenu',
    Board: () => <TopMenu items={[{
        text: 'Home',
        link: '#'
    }, {
        text: 'Discover'
    }, {
        text: 'Docs'
    }, {
        text: 'Blog'
    }, {
        text: 'About Us'
    }, {
        text: 'Contact Us'
    }]} />,
    environmentProps: {
        canvasWidth: 1062,
        windowWidth: 1318,
        windowBackgroundColor: '#181717',
        canvasHeight: 40
    }
});
