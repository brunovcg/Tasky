import GoalsList from './Goals/GoalsList'
import ActivitiesList from './Activities/ActivitiesList'
import {GroupContainer} from './styles';
import Button from '../../components/button/Button'
import { useState, useEffect} from 'react';
import { useWindowSize } from '../../providers/windowSize';
import { useParams } from 'react-router-dom'
import { api } from '../../service/api';




const Group = () => {

    const params = JSON.parse( localStorage.getItem('@tasky/dashboard/group') );


    const userToken = JSON.parse( localStorage.getItem('@tasky/login/token') );

    const [specifGroup, setSpecificGroup] = useState([])

    const [hidden, setHidden] = useState(true);

    const {useWindowDimensions} = useWindowSize();

    const {width} = useWindowDimensions();

    const changeDisplay = () => {
        setHidden(!hidden)
    }

    const groupRequest = () => {
        api
            .get(`/groups/${params}/`, {
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`,
                },
            })
            .then(response => setSpecificGroup(response.data))
    }

    useEffect(() => {
        groupRequest();
      }, []);


    return(
        <GroupContainer>

            <div className="headerGroup">
                <div className="titleContainer">
                    <h2>{specifGroup.name}</h2>
                    <h3>Description: <span className="titleSpan">{specifGroup.description}</span></h3>
                    <h3>Category: <span className="titleSpan">{specifGroup.category}</span></h3>
                </div>
                <div className="buttonContainer">
                    <Button
                        setSize={"giant"}
                        setColor={"var(--green)"}  
                        click={changeDisplay}              
                        >{`change to ${hidden ? "Goals" : "Activities"}`}
                    </Button>
                </div> 
            </div> 

            <div className="mainGroup">

                 { width > 500 ? 
                    <>
                        <GoalsList />
                        <ActivitiesList/>
                    </>
                    
                    : ( hidden ? <ActivitiesList/> : <GoalsList/>)
                 }
            </div>

        </GroupContainer>
    )
}

export default Group
