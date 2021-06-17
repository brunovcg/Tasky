import {Card} from './styles';
import { useHistory } from 'react-router-dom';
import Button from '../../components/button/Button';

const CardGroup = ({name, description, category, path}) => {

    const history = useHistory();

    const redirect = (path) => {
        history.push(`/dashboard/group/${path}`);
        console.log(`/dashboard/group/${path}`)
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