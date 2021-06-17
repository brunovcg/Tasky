import {CardsContainer, ErrorPop, HeaderContainer, PopUpContainer} from './styles';
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

const Groups = () => {

    const {groups, newGroup, setGroups} = useGroups();

    const [token] = useState(JSON.parse(localStorage.getItem('@tasky/login/token')) || '');

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
        //passar um filtro para mostrar os grupos que o usuário esta inserido
    }

    const {
       register,
       handleSubmit,
       formState: {errors},
       reset,
    } = useForm ({
       resolver: yupResolver(schema)
    })

    const submitFunction = () => {
        newGroup();
        handlePopUp();
    }

   

    useEffect(() => {
        getGroups()}, []
    )

    return (
        <>
        {/* <button onClick={() => console.log(groups)}>test</button> */}
            <main>
                <HeaderContainer>
                    <h2>Groups</h2>
                    <Button
                        setColor={'var(--blue)'}
                        setSize={'large'}
                        click={() => console.log('New Group')}
                    >+ New Group</Button>
                </HeaderContainer>
                <CardsContainer>
                    {
                        groups.map((group) => (
                            <CardGroup key={group.id} 
                                name={group.name}
                                description={group.description}
                                category={group.category}
                                path={group.id}
                            />
                        ))
                    }
                </CardsContainer>
                {    
                    <PopUpContainer>
                    {
                        showNewGroup && 
                        <PopUp 
                            title="Add New Group"
                            onSubmit={handleSubmit(submitFunction)}
                        >     
                            <Input 
                                name="name"
                                register={register}
                                placeholder="Name this Group!"
                            />
                            <ErrorPop>{errors.name?.message}</ErrorPop>
                            <Input 
                                name="description"
                                register={register}
                                placeholder="Give a Desciption to this group"
                            />
                            <ErrorPop className="errorPopUp">{errors.description?.message}</ErrorPop>
                            <Input 
                                name="category"
                                register={register}
                                placeholder="What Category is it?"
                            />
                            <ErrorPop className="errorPopUp">{errors.difficulty?.message}</ErrorPop>
                        </PopUp>
                    }  
                    </PopUpContainer>
                }
            </main>
        </>
    )
}

export default Groups;