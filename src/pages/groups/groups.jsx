import {CardsContainer, HeaderContainer} from './styles';
import Button from '../../components/button/Button';
import CardGroup from './cardGroup';

const Groups = () => {
    return (
        <>
            <main>
                <HeaderContainer>
                    <h2>Groups</h2>
                    <Button
                        setColor={'var(--blue)'}
                        setSize={'large'}
                        click={() => console.log('New Group')}
                    >+ New Group</Button>
                </HeaderContainer>
                <CardsContainer>
                    <CardGroup/>
                    <CardGroup/>
                    <CardGroup/>
                </CardsContainer>
            </main>
        </>
    )
}

export default Groups;