import {Card} from './styles';
import GroupImg from '../../assets/group-img.png';
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
                <p>{name}</p>
                <p>{description}</p>
                <p>{category}</p>
            </div>
            <div className='img'>
                <img src={GroupImg} alt='group'/>
                <Button
                    setColor={'var(--blue)'}
                    setSize={'large'}
                    click={() => redirect(path)}
                >Access</Button>
                {/* <button onClick={() => redirect(path)}>Access</button> */}
            </div>
        </Card>
    )
}

export default CardGroup;