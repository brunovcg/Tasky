import Button from "../../../components/button/Button"
import { ActivitiesContainer } from "../styles"


const Activities = ({id, title, group, click }) => {

    return(
        <ActivitiesContainer>
            <div className="taskContainer">
                <p>{title}</p>
            </div>
            <div className="buttonContainer">
                <Button
                    setColor={'var(--red)'}
                    setSize={'medium'}
                    click={click}
                    >Done!
                </Button>
            </div>

        </ActivitiesContainer>
    )
}

export default Activities