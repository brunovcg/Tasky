import {Card} from './styles';
import { useHistory } from 'react-router-dom';
import Button from '../../components/button/Button';
import { useGoalsRequest } from '../../providers/addNewGoal';

const CardGroup = ({name, description, category, path, group}) => {

    const history = useHistory();

    const { setWhichGroup,setWichGroupToCreate } = useGoalsRequest();

    setWhichGroup(group.id)
    setWichGroupToCreate(group.id)

    const redirect = (path) => {
        history.push(`/dashboard/group`);
        console.log(`/dashboard/group`)
    }

    return (
        <Card>
            <div className='info'>
                <h4>{name}</h4>
                <p><span>Description: </span>{description}</p>
                <p><span>Category: </span>{category}</p>
            </div>
            <div className='img'>
                {/* <img src={GroupImg} alt='group'/> */}
                </div>
            <div className="buttonBox">
                <Button
                    setColor={'var(--blue)'}
                    setSize={'large'}
                    click={() => redirect(path)}
                >Access</Button>
            </div>
                {/* <button onClick={() => redirect(path)}>Access</button> */}
            
        </Card>
    )
}

export default CardGroup;