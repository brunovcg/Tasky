import Goals from './Goals';
import Button from '../../../components/button/Button';
// import {PopUp} from '../../../components/pop-up/PopUp' 
import { useState } from 'react';

const GoalsList = () => {

    const [goalPopUp, setGoalPopUp] = useState(false)


    const handleNewGoal = () => {
        setGoalPopUp(!goalPopUp)
    }



    return(
        <div className="groupGoals">

                    <div className="goalTitle">   
                        <h3>Goals</h3>
                        <Button
                            setSize={"large"}
                            setColor={"var(--blue)"}   
                            click={()=>console.log("teste ADD Goal")}
                            >+ Goal
                        </Button>
                    </div>
                    <div className="goalMain">
                        <Goals/>
                        <Goals/>     
                        <Goals/>          
                    </div>

                    <div className="popUps">

                    </div>

                </div>
    )
}

export default GoalsList