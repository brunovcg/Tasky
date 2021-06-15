import { CardsPlace, HeaderOfHabits } from './styles';
import Button from '../../components/button/Button';
import CardHabits from './CardHabits';
import {useState} from 'react';
import {PopUp} from '../../components/pop-up/PopUp'
import Input from '../../components/Input/Input'

const Habits = () => {

    const [showNewHabit, setShowNewHabit] = useState(false)

    const [showUpdateHabit, setShowUpdateHabit] = useState(false)

    const [showDeleteHabit, setShowDeleteHabit] = useState(false)




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
                        clickDelete={()=>handlePopUp(showDeleteHabit, setShowDeleteHabit) }
                        clickUpdate={()=>handlePopUp(showUpdateHabit, setShowUpdateHabit) }
                    />
                  
                </CardsPlace>

               { showNewHabit && 
                    <PopUp onClick={()=>handlePopUp(showNewHabit, setShowNewHabit)} title="Add New Habit" >
                        <Input/>
                        <Input/>
                        <Input/>
                    </PopUp>
               }

                { showUpdateHabit && 
                    <PopUp onClick={()=>handlePopUp(showUpdateHabit, setShowUpdateHabit)} title="Update Habit" >
                        <Input/>
                        <Input/>
                        <Input/>
                    </PopUp>
                }

                { showDeleteHabit && 
                    <PopUp onClick={()=>handlePopUp(showDeleteHabit, setShowDeleteHabit)} title="Delete Habit" >
                        <Input/>
                        <Input/>
                        <Input/>
                    </PopUp>
                }








            </main>
            
        </>
    )
}

export default Habits;