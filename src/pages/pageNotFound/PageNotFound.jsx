import NotFound from '../../assets/page-not-found.png';
import {Container, Info} from './styles';
import Button from '../../components/button/Button'

const PageNotFound = () => {
    return (
        <Container>
            <img src={NotFound} alt='Page NOT Found'/>
            <Info>
                <h3>Woops... Looks like nothing is here!</h3>
                <h3>We couldn't find that page!</h3>
                <h2>Page Not Found</h2>
                <h1>Tasky</h1>

                <Button 
                    setColor={"var(--red)"}
                    setSize={"small"}
                    click={()=>console.log("small")}                    
                    >small
                </Button>

                <Button 
                    setColor={"var(--red)"}
                    setSize={"medium"}
                    click={()=>console.log("small")}                    
                    >medium
                </Button>

                <Button 
                    setColor={"var(--red)"}
                    setSize={"large"}
                    click={()=>console.log("large")}                    
                    >large
                </Button>




            </Info>
        </Container>
    )
}

export default PageNotFound;