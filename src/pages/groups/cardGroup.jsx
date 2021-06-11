import {Card} from './styles';
import GroupImg from '../../assets/group-img.png';

const CardGroup = () => {
    return (
        <Card>
            <div className='info'>
                <p>Name</p>
                <p>Description</p>
                <p>Category</p>
            </div>
            <div className='img'>
                <img src={GroupImg} alt='group'/>
            </div>
        </Card>
    )
}

export default CardGroup;