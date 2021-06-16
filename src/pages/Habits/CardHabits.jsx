import { Card, CardText, CardButtons } from './styles';
import Button from '../../components/button/Button';



const CardHabits = ({title, frequency, status, difficulty,category, clickDelete, clickUpdate}) => {


    


    return (
        <Card>
            <CardText>
                <p className="titleCard">{title}</p>
                <p className="infoCard">Category: <span className="categoryInfo">{category}</span></p>
                <p className="infoCard">Frequency  <span className="frequencyInfo">{frequency}</span></p>
                <p className="infoCard">Difficulty  <span className="frequencyInfo">{difficulty}</span></p>
                <p className="infoCard">Status  <span className="frequencyInfo">{status ? "done": "To-Do"}</span></p>
            </CardText>
            <CardButtons>
                <Button
                    setColor={'var(--blue)'}
                    setSize={'medium'}
                    click={clickUpdate}
                >Done</Button>
                <Button
                    setColor={'var(--red)'}
                    setSize={'medium'}
                    click={clickDelete}
                >Delete</Button>
            </CardButtons>    
        </Card>
    )
}

export default CardHabits;