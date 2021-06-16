import {Card} from './styles';
import GroupImg from '../../assets/group-img.png';

const CardGroup = ({name, description, category}) => {
    return (
        <Card>
            <div className='info'>
                <p>{name}</p>
                <p>{description}</p>
                <p>{category}</p>
            </div>
            <div className='img'>
                <img src={GroupImg} alt='group'/>
            </div>
        </Card>
    )
}

export default CardGroup;