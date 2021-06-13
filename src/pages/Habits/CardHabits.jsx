import { Card, CardText, CardButtons } from './styles';
import Button from '../../components/button/Button';

const CardHabits = () => {
    return (
        <Card>
            <CardText>
                <p>Title</p>
                <p>Category</p>
                <p>Frequency</p>
            </CardText>
            <CardButtons>
                <Button
                    setColor={'var(--blue)'}
                    setSize={'medium'}
                    // click={() => }
                >Update</Button>
                <Button
                    setColor={'var(--red)'}
                    setSize={'medium'}
                    // click={() => }
                >Delete</Button>
            </CardButtons>    
        </Card>
    )
}

export default CardHabits;