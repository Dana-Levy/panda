import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../card/card';

export default createBoard({
    name: 'Card',
    Board: () => <Card title={'Hamlet Contemplates ...'} imageUrl={'https://static.wixstatic.com/media/8586f3_6bc9a9458b9d40b4a0029aef96d5babe~mv2.png/v1/fill/w_470,h_300,al_c,lg_1,q_85,enc_auto/8586f3_6bc9a9458b9d40b4a0029aef96d5babe~mv2.png'} profile={{
        eth: '78,098',
        imageUrl: 'https://cdn.dribbble.com/users/1338391/screenshots/15264109/media/1febee74f57d7d08520ddf66c1ff4c18.jpg?compress=1&resize=400x300&vertical=top',
        name: 'Alex'
    }} />,
    environmentProps: {
        canvasWidth: 385,
        windowWidth: 662,
        windowHeight: 648
    }
});
