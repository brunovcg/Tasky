import { CardsPlace, HeaderOfHabits, ErrorPop, PopUpContainer, Main } from './styles';
import Button from '../../components/button/Button';
import CardHabits from './CardHabits';
import {useState} from 'react';
import {PopUp} from '../../components/pop-up/PopUp'
import Input from '../../components/Input/Input'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { api } from '../../service/api';
import jwt_decode from 'jwt-decode';
import { useEffect } from 'react';
import { toast } from 'react-toastify'


const Habits = () => {

    const [token] = useState(JSON.parse(localStorage.getItem("@tasky/login/token")) || "");

    const [decodedId] = useState(jwt_decode(token).user_id || {});


    const [showNewHabit, setShowNewHabit] = useState(false);

    const [habits, setHabits] = useState([]);

    const schema = yup.object().shape({
        title: yup.string().required('A title is required'),
        category: yup.string().required('You need to categorize'),
        difficulty:yup.string().required("You need to set the Difficult"),
        frequency:yup.string().required("You need to set the Frequency"), 
   });

   const {
       register,
       handleSubmit,
       formState: {errors},
       reset,
   } = useForm({
       resolver: yupResolver(schema)
   });

   const handlePopUp = () => {
    setShowNewHabit(!showNewHabit)
    reset()
   }

   const initFunction=()=>{
    api.get(
        '/habits/personal/', 
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
    ).then(response=> setHabits(response.data))
}

   const submitFunction = ({title, category, difficulty, frequency}) => {
       const user = {
           title, 
           category, 
           difficulty, 
           frequency, 
           achieved: false,
           how_much_achieved: 0,
           user: decodedId
    }

       api.post(
           '/habits/',
           user,
           {
            headers: {
                Authorization: `Bearer ${token}`,
            },
           }
       )
       .then((_)=>{
           toast.success(`${title} Added!`)
           initFunction()
        })
       .catch((_)=> toast.error("Something went wrong, try again!"))
       handlePopUp()
   }

   const deleteFunction = (hab) => {
        api.delete(
            `/habits/${hab.id}/`, 
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
            })
                .then((_)=>{toast.success(`${hab.title} deleted`)})
                .catch((_)=> toast.error("Something went wrong, try again!"))
   }

   const updateFunction=(hab)=>{
    const task = {
        how_much_achieved: 100,
        achieved: true
    }
        api.patch(
            `/habits/${hab.id}/`,
            task,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        ).then((_)=>{toast.success(`${hab.title} done!`)})
        .catch((_)=> toast.error("Something went wrong, try again!"))
   }

   

    useEffect(()=>{initFunction()},[])

    return (
            <Main>
                <div className="headerBox">
                    <h2>Habits</h2>
                    <Button
                        setColor={'var(--green)'}
                        setSize={'large'}
                        click={()=>handlePopUp()}
                     >+ New Habit
                    </Button>
                </div>

                <CardsPlace>
                    {habits.map(res=>
                        <CardHabits
                            clickDelete={()=>deleteFunction(res)}
                            clickUpdate={()=>updateFunction(res)}
                            title={res.title}
                            difficulty={res.difficulty}
                            frequency={res.frequency}
                            category={res.category}
                            status={res.achieved}
                        />
                    )}                             
                </CardsPlace>
                
               {    
                    showNewHabit && <PopUpContainer>
                    <PopUp 
                        title="Add New Habit"
                        onSubmit={handleSubmit(submitFunction)}
                        onClickClose={handlePopUp}
                    >     
                        <Input 
                            name="title"
                            register={register}
                            placeholder="Name this Habbit!"
                            setBorder="var(--green)"
                        />
                        <ErrorPop>{errors.title?.message}</ErrorPop>
                        <Input 
                            name="frequency"
                            register={register}
                            placeholder="How often?"
                            setBorder="var(--green)"
                        />
                        <ErrorPop className="errorPopUp">{errors.frequency?.message}</ErrorPop>
                        <Input 
                            name="difficulty"
                            register={register}
                            placeholder="How hard is it?"
                            setBorder="var(--green)"
                        />
                        <ErrorPop className="errorPopUp">{errors.difficulty?.message}</ErrorPop>
                        <Input 
                            name="category"
                            register={register}
                            placeholder="Categorize it!"
                            setBorder="var(--green)"
                        />
                        <ErrorPop className="errorPopUp">{errors.category?.message}</ErrorPop>
                    </PopUp>
                    </PopUpContainer>
                
               }

            </Main>           
    )
}

export default Habits;