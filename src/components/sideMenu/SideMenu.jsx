import {Container, UserContainer, Link, LinkContainer} from './styles';
import User from '../../assets/user.png';
import MenuIcon from '@material-ui/icons/Menu';
// import Button from '../button/Button';

const SideMenu = () => {
    return(
        <Container>
            <span>
                <MenuIcon/>
            </span>
            <UserContainer>
                <img src={User} alt='user'/>
            </UserContainer>
            <p>User</p>
            <LinkContainer>
                <Link>Habits</Link>
                <Link>Groups</Link>
            </LinkContainer>
        </Container>
    )
}

export default SideMenu;