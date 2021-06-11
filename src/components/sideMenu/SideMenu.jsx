import {Container, UserContainer, Link, LinkContainer, ButtonContainer, Img, GroupMembers} from './styles';
import User from '../../assets/user.png';
// import MenuIcon from '@material-ui/icons/Menu';
import Button from '../button/Button';
import {MembersContainer} from './styles';


const SideMenu = () => {
    return(
        <>
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
            <GroupMembers/>

            <MembersContainer>
                {/* <div>membro 1</div>
                <div>membro 2</div>
                <div>membro 3</div>
                <div>membro 4</div> */}
            </MembersContainer>

        </Container>


            

            </>
    )
}

export default SideMenu;