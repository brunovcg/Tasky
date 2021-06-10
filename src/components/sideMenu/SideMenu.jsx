import {Container, UserContainer, Link, LinkContainer, ButtonContainer, Img} from './styles';
import User from '../../assets/user.png';
// import MenuIcon from '@material-ui/icons/Menu';
import Button from '../button/Button';

const SideMenu = () => {
    return(
        <Container>
            {/* {
                width='500px' &&
                <span>
                    <MenuIcon/>
                </span>
            } */}
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
                    setSize={'small'}
                    click={() => console.log('Logout')}
                >Logout</Button>
            </ButtonContainer>
        </Container>
    )
}

export default SideMenu;