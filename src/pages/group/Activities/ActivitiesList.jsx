import Activities from './Activities';
import Button from '../../../components/button/Button'


const GoalsList = () => {


    return(
        <div className="groupActivities">

                    <div className="activitiesTitle">   
                        <h3>Activities</h3>
                        <Button
                            setSize={"large"}
                            setColor={"var(--blue)"}   
                            click={()=>console.log("teste ADD Activities")}
                            >+ Activities
                        </Button>
                    </div>
                    <div className="activitiesMain">
                        <Activities/>
                        <Activities/>
                        <Activities/>
                    </div>
                </div>
    )
}

export default GoalsList