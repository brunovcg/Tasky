import { GoalsContainer } from "../styles"
import {PieChart} from '../Charts/Charts'
// import {data} from '../Graphic/data'

const Goals = () => {

    return(
        <GoalsContainer>
            <div className="infoContainer">
                <h3>Title</h3>
                <p>Dificult: <span>{"Easy"}</span></p>
                <p className="doneContainer">Done: <span className="doneInfo">{10}%</span></p>
                <p className="todoContainer">To-Do: <span className="todoInfo">{90}%</span></p>
            </div>
            <div className="chartContainer">
                <PieChart doneData={10} todoData={90}/>
            </div>
            
        </GoalsContainer>
    )
}

export default Goals