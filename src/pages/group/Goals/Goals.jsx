import { GoalsContainer } from "../styles"
import {PieChart} from '../Charts/Charts'
// import {data} from '../Graphic/data'

const Goals = ({ title, difficulty, how_much_achieved, click }) => {

    const hasToDo = 100 - how_much_achieved; 

    return(
        <GoalsContainer>
            <div className="infoContainer">
                <h3>{title}</h3>
                <p className="difficult">Dificult: <span>{difficulty}</span></p>
                <p className="doneContainer">Done: <span className="doneInfo">{how_much_achieved}%</span></p>
                <p className="todoContainer">To-Do: <span className="todoInfo">{hasToDo}%</span></p>
            </div>
            <div className="chartContainer">
                <PieChart doneData={how_much_achieved} todoData={hasToDo}/>
                <button onClick={click}>Add 10%</button>
            </div>
        </GoalsContainer>
    )
}

export default Goals