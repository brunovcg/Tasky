import Goals from './Goals';
import Button from '../../../components/button/Button';
import {PopUp} from '../../../components/pop-up/PopUp';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../../../components/Input/Input.jsx';
import { PopUpContainer } from '../../Habits/styles';
import { api } from '../../../service/api';
import { toast } from 'react-toastify';

const GoalsList = () => {
    
    const [goalPopUp, setGoalPopUp]     = useState(false)
   
    const userToken = JSON.parse( localStorage.getItem('@tasky/login/token') );

    const params = JSON.parse( localStorage.getItem('@tasky/dashboard/group') );

    const schema = yup.object().shape({
        title: yup.string().required('This field is required'),
        difficulty: yup.string().required('This field is required'),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })


    const handleCloseModal = () => setGoalPopUp(false);

    const [howPercent, setHowPercent] = useState(0)

    const handleSum = () => {
       if (howPercent<100){setHowPercent(howPercent + 10)} 
       return howPercent
    }

    const [ goalsListRender, setGoalsListRender] = useState([])

    const addGoal = ({title, difficulty}) => {
        const goalsAdd = {
            title,
            difficulty,
            how_much_achieved: 0,
            group: params
        }
        api.post(
            `/goals/`,
            goalsAdd,
            {
                headers: {
                    Authorization: `Bearer ${userToken}`,
                },
            }
        )
        .then((_)=>{
            toast.success(`Goal Added!`)
            handleLoadGoals(params)
            handleCloseModal()
            })
        .catch((_)=> toast.error("Something went wrong, try again!"))
    }

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
        const addTen = {
                achieved: true,
                how_much_achieved: goal.how_much_achieved < 100 ? goal.how_much_achieved + 10 : 100
        }

        api.patch(`/goals/${goal.id}/`, 
            addTen,
            {headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`,
                }})
        .then((_)=>{
            toast.success(`updated`)
            handleLoadGoals(params)
            // .catch((_)=> toast.error("Something went wrong, try again!"))
        })
    }


    useEffect(() => {
        handleLoadGoals(params);
      }, [params]);
    

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
                        {
                            goalsListRender.map((goal) => (
                                <Goals
                                    key={goal.id}
                                    title={goal.title}
                                    difficulty={goal.difficulty}
                                    how_much_achieved={goal.how_much_achieved}
                                    click={() => handleUpdate(goal)}
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
                                onSubmit={handleSubmit(addGoal)} 
                                onClickClose={handleCloseModal}
                            >
                                <Input register={register} name='title' placeholder='Title' setBorder="var(--green)"/>
                                <div className="erro">{errors.title?.message}</div>
                                <Input register={register} name='difficulty' placeholder='Difficulty' setBorder="var(--green)"/>
                                <div className="erro">{errors.difficulty?.message}</div>
                            </PopUp>
                        </PopUpContainer> 
                 
            }
        </>
    )
}

export default GoalsList