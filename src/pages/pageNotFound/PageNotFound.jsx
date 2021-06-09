import NotFound from '../../assets/page-not-found.png';
import {Container} from './styles';

const PageNotFound = () => {
    return (
        <Container>
        <img src={NotFound} alt='Page NOT Found'/>
        <h2>Page NOT Found</h2>
        <h1>Tasky</h1>
        </Container>
    )
}

export default PageNotFound;