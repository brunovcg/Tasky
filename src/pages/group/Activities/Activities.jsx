import Button from "../../../components/button/Button"
import { ActivitiesContainer } from "../styles"


const Activities = () => {

    return(
        <ActivitiesContainer>
            <div className="taskContainer">
                <p>Esse é um exemplo de Task, Lorem, ipsum dolor sit amet consecteit.</p>
            </div>
            <div className="buttonContainer">
                <Button
                    setColor={'var(--red)'}
                    setSize={'medium'}
                    click={()=>console.log("teste done!")}
                    >Done!
                </Button>
            </div>

        </ActivitiesContainer>
    )
}

export default Activities