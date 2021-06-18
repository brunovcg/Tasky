import Goals from './Goals';
import Button from '../../../components/button/Button';
import {PopUp} from '../../../components/pop-up/PopUp';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../../../components/Input/Input.jsx';
import {  useGoalsRequest } from '../../../providers/addNewGoal';
import { PopUpContainer } from '../../Habits/styles';
import { api } from '../../../service/api';
import { toast } from 'react-toastify';

const GoalsList = ({specifGroup}) => {
    
    const [goalPopUp, setGoalPopUp]     = useState(false)
    const { setNewGoalData, goalsList } = useGoalsRequest() //REFATORAR
    const userToken = JSON.parse( localStorage.getItem('@tasky/login/token') );

    // const [goalsList, setGoalsList] = useState();

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

    const [howPercent, setHowPercent] = useState(0)

    const handleSum = () => {
       if (howPercent<100){setHowPercent(howPercent + 10)} 
    }

    const [ goalsListRender, setGoalsListRender] = useState([])


    const handleLoadGoals = (id) => {
        api.get(`/groups/${id}/`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`,
            },
        })
        .then(response => setGoalsListRender(response.data.goals))
        };
    
    const handleUpdate = (goal) => {
        const addTen = { how_much_achieved: handleSum()}

        api.patch(`/goals/${goal.id}/`, addTen)
        .then((_)=>{
            toast.success(`updated`)
            handleLoadGoals(specifGroup.id)
            .catch((_)=> toast.error("Something went wrong, try again!"))
        })
    }

    // handleLoadGoals(specifGroup.id)
    useEffect(() => {
        handleLoadGoals(specifGroup.id);
      }, [specifGroup]);
    

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
                            {/* { goalsList && goalsList.map((el, index) => <Goals {...el} key={index}/>) } */}
                            {
                            goalsListRender.map((goal) => (
                                <Goals
                                    key={goal.id}
                                    title={goal.title}
                                    dificult={goal.title}
                                    how_much_achieved={goal.how_much_achieved}
                                    click={() => handleUpdate(goal.id)}
                                />
                                
                            ))
                        }
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