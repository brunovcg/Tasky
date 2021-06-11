import GoalsList from './GoalsList'
import ActivitiesList from './ActivitiesList'
import {GroupContainer} from './styles';
import Button from '../../components/button/Button'
import { useState} from 'react';
import { useWindowSize } from '../../providers/windowSize';


const Group = () => {

    const [hidden, setHidden] = useState(true);

    const {useWindowDimensions} = useWindowSize()

    const {width} = useWindowDimensions()


    const changeDisplay = () => {

        setHidden(!hidden)
    }


    return(
        <GroupContainer>

            <div className="headerGroup">
                <div className="titleContainer">
                    <h2>Group Name</h2>
                    <h3>Description: <span className="titleSpan">{"test descrição"}</span></h3>
                    <h3>Category: <span className="titleSpan">{"teste categoria"}</span></h3>
                </div>
                <div className="buttonContainer">
                    <Button
                        setSize={"huge"}
                        setColor={"var(--grey)"}  
                        click={changeDisplay}              
                        >{`change to ${hidden ? "Goals" : "Activities"}`}
                    </Button>
                </div> 
            </div> 

            <div className="mainGroup">

                 { width > 500 ? 
                    <>
                        <GoalsList/>
                        <ActivitiesList/>
                    </>
                    
                    : ( hidden ? <ActivitiesList/> : <GoalsList/>)
                 }
            </div>
        </GroupContainer>
    )
}

export default Group
