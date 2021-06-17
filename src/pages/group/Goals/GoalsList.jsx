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
import { useContext } from 'react';
import { NewGoalContext } from '../../../providers/newGoal';
import { PopUpContainer } from '../../Habits/styles';

const GoalsList = () => {

    const { setNewGoalData } = useContext(NewGoalContext)

    const [goalPopUp, setGoalPopUp] = useState(false)

    const [goalsList, setGoalsList] = useState();

    const schema = yup.object().shape({
        title: yup.string().required('This field is required'),
        difficulty: yup.string().required('This field is required'),
        how_much_achieved: yup.string().required('This field is required'),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const handleNewGoal = (data) => {
        setGoalPopUp(false)
        return setNewGoalData(data)
    }

    const handleCloseModal = () => setGoalPopUp(false);

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
                                click={() => setGoalPopUp(true)}
                                
                                >+ Goal
                            </Button>
                        </div>
                        <div className="goalMain">
                            { goalsList && goalsList.map((el, index) => <Goals {...el} key={index}/>) }
                        </div>

                        <div className="popUps">

                        </div>

            </div>
            { goalPopUp && 
                
                        <PopUpContainer>
                            <PopUp 
                                title='Add New Goal'
                                onSubmit={handleSubmit(handleNewGoal)} 
                                onClickClose={handleCloseModal}
                            >
                                <Input register={register} name='title' placeholder='Title' setBorder="var(--green)"/>
                                <div className="erro">{errors.title?.message}</div>
                                <Input register={register} name='difficulty' placeholder='Difficulty' setBorder="var(--green)"/>
                                <div className="erro">{errors.difficulty?.message}</div>
                                <Input register={register} name='how_much_achieved' placeholder='How Much Achieved' setBorder="var(--green)"/>
                                <div className="erro">{errors.how_much_achieved?.message}</div>
                            </PopUp>
                        </PopUpContainer> 
                 
            }
        </>
    )
}

export default GoalsList