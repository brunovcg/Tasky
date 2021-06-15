import { CardsPlace, HeaderOfHabits } from './styles';
import Button from '../../components/button/Button';
import CardHabits from './CardHabits';
import {useState} from 'react';
import {PopUp} from '../../components/pop-up/PopUp'
import Input from '../../components/Input/Input'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { api } from '../../service/api';


const Habits = () => {

    const [token] = useState(JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
    );

    

    const [showNewHabit, setShowNewHabit] = useState(false)

   const [habbits, setHabbits] = useState([]);

   const schema = yup.object().shape({
        title: yup.string().required('A title is required'),
        category: yup.string().required('You need to categorize'),
        difficulty:yup.string().required("You need to set the Difficult"),
        frequency:yup.string().required("You need to set the Frequency"), 
   });


   const {
       register,
       handleSubmit,
       formState: {errors}
   } = useForm({
       resolver: yupResolver(schema)
   });


   const submitFunction = ({title, category, difficulty, frequency}) => {
       const user = {
           title, 
           category, 
           difficulty, 
           frequency, 
           achieved: false,
           how_much_achieved: 0,
           user: "pegar do storage"}

       api.post(
           '/habits/',
           user,
           {
            headers: {
                Authorization: `Bearer ${token}`,
            },
           }.then((_)=> {alert("POSTED!")}).catch(()=>console.log('something wrong happend'))
       )
   }

   const deleteFunction = () => {}

   const updateFunction=()=>{}


    const handlePopUp = (state, setState) => {
        setState(!state)
    }



    return (
        <>
            <main>
                <HeaderOfHabits>
                    <h2>Habits</h2>
                    <Button
                        setColor={'var(--blue)'}
                        setSize={'large'}
                        click={()=>handlePopUp(showNewHabit, setShowNewHabit)}
                    >+ New Habit</Button>
                </HeaderOfHabits>

                <CardsPlace>
                    
                    <CardHabits 
                        clickDelete={deleteFunction }
                        clickUpdate={updateFunction}
                    />
                  
                </CardsPlace>
                
               {    <div className="popUpContainer">{
                         showNewHabit && 
                            <PopUp 
                                onClick={()=>handlePopUp(showNewHabit, setShowNewHabit)}
                                title="Add New Habit" >
                                


                                <Input placeholder="Name this Habbit!"/>
                                <Input placeholder="How often??"/>
                                <Input placeholder="How hard is it?"/>
                                <Input placeholder="Categorize it!"/>
                            </PopUp>
                }  </div>
               }

        







            </main>
            
        </>
    )
}

export default Habits;