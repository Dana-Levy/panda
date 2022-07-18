import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../card/card';

export default createBoard({
    name: 'Card',
    Board: () => <Card />
});
