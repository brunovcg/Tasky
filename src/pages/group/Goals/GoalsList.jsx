import Goals from './Goals';
import Button from '../../../components/button/Button';
import {PopUp} from '../../../components/pop-up/PopUp';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../../../components/Input/Input.jsx';
import { useContext } from 'react';
import { NewGoalContext } from '../../../providers/addNewGoal';
import { Fade, Modal } from '@material-ui/core';
import { useGoalsList } from '../../../providers/GetGoals';

const GoalsList = () => {
    
    const [goalPopUp, setGoalPopUp] = useState(false)
    const { setNewGoalData }        = useContext(NewGoalContext)
    const { goalsList }             = useGoalsList();

    // const [goalsList, setGoalsList] = useState();

    const schema = yup.object().shape({
        title: yup.string().required('This field is required'),
        difficulty: yup.string().required('This field is required'),
        how_much_achieved: yup.number().required('This field is required'),
    })

    const { register, handleSubmit, formState: { error } } = useForm({ resolver: yupResolver(schema) })

    const handleNewGoal = (data) => {
        setGoalPopUp(false)
        return setNewGoalData(data)
    }

    const handleCloseModal = () => setGoalPopUp(false);

    // useEffect( () => {
    //     UserGoals(setGoalsList)
    // }, [])

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
                            { goalsList && goalsList.map((el) => <Goals {...el} />) }
                        </div>

                        <div className="popUps">

                        </div>

            </div>
            { goalPopUp && 
                <Modal open={goalPopUp} onClose={handleCloseModal} >
                    <Fade in={true} >
                        <div>
                            <PopUp title='new Goal' onSubmit={handleSubmit(handleNewGoal)} >
                                <Input register={register} name='title' placeholder='Title' />
                                <Input register={register} name='difficulty' placeholder='Difficulty' />
                                <Input register={register} name='how_much_achieved' placeholder='How Much Achieved' />
                            </PopUp>
                        </div> 
                    </Fade>
                </Modal>
            }
        </>
    )
}

export default GoalsList