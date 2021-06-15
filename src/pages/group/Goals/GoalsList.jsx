import Goals from './Goals';
import Button from '../../../components/button/Button';
import {PopUp} from '../../../components/pop-up/PopUp' 
import { useState } from 'react';
import { UserGoals } from './userGoals';
import { useEffect } from 'react';

const GoalsList = () => {

    const [goalPopUp, setGoalPopUp] = useState(false)

    const [goalsList, setGoalsList] = useState();

    const [buttonNewGoal, setButtonNewGoal] = useState();

    const handleNewGoal = () => {
        setGoalPopUp(!goalPopUp)
    }

    useEffect( () => {
        UserGoals(setGoalsList)
    }, [])

    return(
        <>
            <div className="groupGoals">

                        <div className="goalTitle">   
                            <h3>Goals</h3>
                            <Button
                                setSize={"large"}
                                setColor={"var(--blue)"}   
                                click={() => setButtonNewGoal(true)}
                                >+ Goal
                            </Button>
                        </div>
                        <div className="goalMain">
                            { goalsList && goalsList.map((el) => <Goals {...el} />) }
                        </div>

                        <div className="popUps">

                        </div>

            </div>
            { buttonNewGoal && 
                <div>
                    <PopUp>
                        <input />
                        <input />
                        <input />
                    </PopUp>
                </div> 
            }
        </>
    )
}

export default GoalsList