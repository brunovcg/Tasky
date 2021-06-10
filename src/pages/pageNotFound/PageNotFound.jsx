import NotFound from '../../assets/page-not-found.png';
import {Container, Info} from './styles';


const PageNotFound = () => {
    return (
        <Container>
            <img src={NotFound} alt='Page NOT Found'/>
            <Info>
                <h3>Woops... Looks like nothing is here!</h3>
                <h3>We couldn't find that page!</h3>
                <h2>Page Not Found</h2>
                <h1>Tasky</h1>
            </Info>
        </Container>
    )
}

export default PageNotFound;