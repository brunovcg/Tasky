import {CardsContainer, ErrorPop, HeaderContainer, PopUpContainer, Main} from './styles';
import Button from '../../components/button/Button';
import CardGroup from './cardGroup';
import { useState, useEffect } from 'react';
import { useGroups } from '../../providers/groups';
import { PopUp } from '../../components/pop-up/PopUp';
import Input from '../../components/Input/Input';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {api} from '../../service/api'
import { toast } from 'react-toastify';
import jwt_decode from 'jwt-decode';

const Groups = () => {

    const {groups, setGroups} = useGroups();

    const [userGroupSubscription, setUserGroupSubscription] = useState();

    const [token] = useState(JSON.parse(localStorage.getItem('@tasky/login/token')) || '');

    const [decodedId] = useState(jwt_decode(token).user_id || {});

    const [showNewGroup, setShowNewGroup] = useState(false);

    const schema = yup.object().shape({
        name: yup.string().required('A Name is required'),
        description: yup.string().required('You need to set the Description'),
        category:yup.string().required("You need to set the Category"),
    });

    const handlePopUp = () => {
        setShowNewGroup(!showNewGroup);
        reset();
    }

    const getGroups = () => {
        api.get('/groups/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            setGroups(response.data.results)
        })
    }

    const getUserOnGroup = () => {
        api.get('/groups/subscriptions/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            setUserGroupSubscription(response.data)
        })
    }

    const newGroup = ({name, category, description}) => {

        const addGroup = {
            name: name,
            category: category,
            description: description
        }

        console.log(groups)

        api.post('/groups/', addGroup, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((_) => {
            toast.success('Group Added!')
            getUserOnGroup();
            setShowNewGroup(!showNewGroup);
        }).catch((_) => {
            toast.error('Something went wrong, try again!')
        })
    }



    const {
       register,
       handleSubmit,
       formState: {errors},
       reset,
    } = useForm ({
       resolver: yupResolver(schema)
    })

    const submitFunction = (data) => {
        newGroup(data);
    }

    useEffect(() => {
        getGroups()
        getUserOnGroup()
    }, []
    )

    return (
        <>
            <Main>
                <HeaderContainer>
                    <h2>Groups</h2>
                    <Button
                        setColor={'var(--green)'}
                        setSize={'large'}
                        click={() => handlePopUp()}
                    >+ New Group</Button>
                </HeaderContainer>
                <CardsContainer>
                    {
                        userGroupSubscription &&
                        userGroupSubscription.map((group) => (
                            <CardGroup 
                                group={group}
                                key={group.id} 
                                name={group.name}
                                description={group.description}
                                category={group.category}
                                path={group.id}
                            />
                        ))
                    }
                </CardsContainer>
                 
                    
                    {
                        showNewGroup && 
                        <PopUpContainer>
                        <PopUp 
                            title="Add New Group"
                            onSubmit={handleSubmit(submitFunction)}
                            onClickClose={()=>handlePopUp()}
                        >     
                            <Input 
                                name="name"
                                register={register}
                                placeholder="Name this Group!"
                                setBorder="var(--green)"
                            />
                            <ErrorPop>{errors.name?.message}</ErrorPop>
                            <Input 
                                name="description"
                                register={register}
                                placeholder="Give a Desciption to this group"
                                setBorder="var(--green)"
                            />
                            <ErrorPop className="errorPopUp">{errors.description?.message}</ErrorPop>
                            <Input 
                                name="category"
                                register={register}
                                placeholder="What Category is it?"
                                setBorder="var(--green)"
                            />
                            <ErrorPop className="errorPopUp">{errors.category?.message}</ErrorPop>
                        </PopUp>
                        </PopUpContainer>
                    }  
                    
                
            </Main>
        </>
    )
}

export default Groups;