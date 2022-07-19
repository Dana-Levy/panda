import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../card/card';

export default createBoard({
    name: 'Card',
    Board: () => <Card title={'Hamlet Contemplates ...'} imageUrl={'https://static.wixstatic.com/media/8586f3_6bc9a9458b9d40b4a0029aef96d5babe~mv2.png/v1/fill/w_470,h_300,al_c,lg_1,q_85,enc_auto/8586f3_6bc9a9458b9d40b4a0029aef96d5babe~mv2.png'} profile={{
        eth: 'asdasd',
        imageUrl: 'asdasd',
        name: 'asdas'
    }} />,
    environmentProps: {
        canvasWidth: 385,
        windowWidth: 662,
        windowHeight: 648
    }
});
