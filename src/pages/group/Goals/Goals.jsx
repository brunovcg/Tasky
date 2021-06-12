import { GoalsContainer } from "../styles"
import {PieChart} from '../Charts/Charts'
// import {data} from '../Graphic/data'

const Goals = () => {

    return(
        <GoalsContainer>
            <div className="infoContainer">
                <h3>Goal</h3>
            </div>
            <div className="chartContainer">
                
                <div className="label"> 
                    <div className="colorContainer">
                        <div className="colorBox red"></div>
                        <h6>Done</h6>
                    </div>
                        
                    <div className="colorContainer">
                        <div className="colorBox blue"></div>
                        <h6>To-do</h6>
                    </div>
                </div>



                <PieChart/>
            </div>
            
        </GoalsContainer>
    )
}

export default Goals