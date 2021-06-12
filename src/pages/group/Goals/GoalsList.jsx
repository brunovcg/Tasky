import Goals from './Goals';
import Button from '../../../components/button/Button'


const GoalsList = () => {


    return(
        <div className="groupGoals">

                    <div className="goalTitle">   
                        <h3>Goals</h3>
                        <Button
                            setSize={"large"}
                            setColor={"var(--blue)"}   
                            click={()=>console.log("teste ADD Goal")}
                            >+ Goal
                        </Button>
                    </div>
                    <div className="goalMain">
                        <Goals/>
                        <Goals/>     
                        <Goals/>          
                    </div>
                </div>
    )
}

export default GoalsList