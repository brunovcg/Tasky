import {Container, UserContainer, Link, LinkContainer, ButtonContainer, Img, GroupMembers, MenuBurguer} from './styles';
import User from '../../assets/user.png';
import Button from '../button/Button';
import {MembersContainer} from './styles';
import MenuIcon from '@material-ui/icons/Menu';
import { useWindowSize } from '../../providers/windowSize';
import { useState } from 'react';

const SideMenu = ({setVisibility}) => {

    const [hidden, setHidden] = useState(true);

    const [show, setShow] = useState('hidden');
    
    const {useWindowDimensions} = useWindowSize()

    const {width} = useWindowDimensions()

    const changeDisplay = () => {
        setHidden(!hidden)
        console.log('changeDisplay')
        if (hidden === false) {
            setShow('visible');
        } else {
            setShow('hidden');
        }
    }

    return(
        <>
        {
            width < 500 &&
            <MenuBurguer onClick={changeDisplay}>
                <MenuIcon/>
            </MenuBurguer>
        }
        <Container setVisibility={show}>
            
        <UserContainer>
        <Img src={User} alt='user'/>
        <p>User Name</p>
        <LinkContainer>
                <Link>Habits</Link>
                <Link>Groups</Link>
            </LinkContainer>
            </UserContainer>
        <ButtonContainer>
        <Button
                setColor={'var(--red)'}
                setSize={'medium'}
                click={() => console.log('Logout')}
                >Logout</Button>
                </ButtonContainer>
                <GroupMembers>
                    <MembersContainer>
                        {/* <div>membro 1</div>
                        <div>membro 2</div>
                        <div>membro 3</div>
                        <div>membro 4</div> */} 
                    </MembersContainer>
                </GroupMembers>
        </Container>
        </>
    )
}

export default SideMenu;