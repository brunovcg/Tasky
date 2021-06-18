import {Container, UserContainer, StyledLink, LinkContainer, ButtonContainer, Img, GroupMembers, MenuBurguer} from './styles';
import User from '../../assets/user.png';
import Button from '../button/Button';
import {MembersContainer} from './styles';
import MenuIcon from '@material-ui/icons/Menu';
import { useWindowSize } from '../../providers/windowSize';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {useAuth} from '../../providers/Authentication/Authentication'

const SideMenu = () => {

    const {setAuthenticated} = useAuth()

    const [hidden, setHidden] = useState(false);

    const [show, setShow] = useState('hidden');
    
    const {useWindowDimensions} = useWindowSize()

    const {width} = useWindowDimensions()

    const [username] = useState(JSON.parse(localStorage.getItem('@tasky/login/user')) || '');

    const changeDisplay = () => {
        setHidden(!hidden)
        console.log(show)
        if (hidden === false) {
            setShow('visible');
        } else {
            setShow('hidden');
        }
    }

    const history = useHistory();

    const handleClick = (path) => {
        history.push(path);
        localStorage.clear();
        setAuthenticated(false)
    }

    return(
        <>
        {
            width < 500 &&
            <MenuBurguer onClick={() => changeDisplay()}>
                <MenuIcon/>
            </MenuBurguer>
        }
        <Container setVisibility={show}>
            
        <UserContainer>
            <Img src={User} alt='user'/>
            <p>{username}</p>
            <LinkContainer>
                    <StyledLink><Link to='/dashboard/habits'>Habits</Link></StyledLink>
                    <StyledLink><Link to='/dashboard/groups'>Groups</Link></StyledLink>
            </LinkContainer>
            </UserContainer>
        <ButtonContainer>
        <Button
                setColor={'var(--dark-red)'}
                setSize={'large'}
                click={() => handleClick('/')}

        >Logout</Button>
                </ButtonContainer>
                <GroupMembers>
                    <MembersContainer>

                    </MembersContainer>
                </GroupMembers>
        </Container>
        </>
    )
}

export default SideMenu;