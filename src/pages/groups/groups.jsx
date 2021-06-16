import {CardsContainer, HeaderContainer} from './styles';
import Button from '../../components/button/Button';
import CardGroup from './cardGroup';
import { useGroups } from '../../providers/groups';

const Groups = () => {

    const {groups} = useGroups();

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
                    {
                        groups.map((group) => (
                            <CardGroup key={group.id} 
                                name={group.name}
                                description={group.description}
                                category={group.category}
                            />
                        ))
                    }
                </CardsContainer>
            </main>
        </>
    )
}

export default Groups;