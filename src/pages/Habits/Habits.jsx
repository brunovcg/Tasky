import { CardsPlace, HeaderOfHabits } from './styles';
import Button from '../../components/button/Button';
import CardHabits from './CardHabits';

const Habits = () => {
    return (
        <>
            <main>
                <HeaderOfHabits>
                    <h2>Habits</h2>
                    <Button
                        setColor={'var(--blue)'}
                        setSize={'large'}
                        click={() => console.log('New Habit')}
                    >+ New Habit</Button>
                </HeaderOfHabits>
                <CardsPlace>
                    <CardHabits/>
                    <CardHabits/>
                    <CardHabits/>
                    <CardHabits/>
                    <CardHabits/>
                </CardsPlace>
            </main>
        </>
    )
}

export default Habits;