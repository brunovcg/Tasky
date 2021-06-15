import Goals from './Goals';
import Button from '../../../components/button/Button';
import {PopUp} from '../../../components/pop-up/PopUp';
import { useState } from 'react';
import { UserGoals } from './userGoals';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../../../components/Input/Input.jsx';

const GoalsList = () => {

    const [goalPopUp, setGoalPopUp] = useState(false)

    const [goalsList, setGoalsList] = useState();

    const [buttonNewGoal, setButtonNewGoal] = useState();

    const schema = yup.object().shape({
        title: yup.string().required('This field is required'),
        difficulty: yup.string().required('This field is required'),
        how_much_achieved: yup.number().required('This field is required'),
    })

    const { register, handleSubmit, formState: { error } } = useForm({ resolver: yupResolver(schema) })

    const handleNewGoal = (data) => {
        setGoalPopUp(!goalPopUp)
        console.log(data)
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
                    <PopUp title='new Goal' onSubmit={handleSubmit(handleNewGoal)} >
                        <input {...register('title')} />
                        <input {...register('difficulty')} />
                        <input {...register('how_much_achieved')} />
                    </PopUp>
                </div> 
            }
        </>
    )
}

export default GoalsList