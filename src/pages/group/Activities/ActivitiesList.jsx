import Activities from './Activities';
import Button from '../../../components/button/Button'
import { useState, useEffect } from 'react'
import {PopUp} from '../../../components/pop-up/PopUp';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../../../components/Input/Input.jsx';
import { useContext } from 'react';
import { ActivitieContext } from '../../../providers/ActivitiesCtx'
import { PopUpContainer} from "../styles"

const ActivitiesList = () => {

    const { activitiesRenderList, 
            deleteActivitie, 
            addActivitie
        } = useContext(ActivitieContext)

    const [activitiesPopUp, setActivitiesPopUp] = useState(false)

    const handleCloseModal = () => {
        setActivitiesPopUp(false);
    }

    const handleNewActivitie = (data) => {
        setActivitiesPopUp(false)
        // return setNewActivitiesData(data) -> puxar no provider
    }

    useEffect( () => {
        setActivitiesPopUp(false)
    }, [activitiesRenderList])

    const formSchema = yup.object().shape({
        title: yup.string().required('This field is required'),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(formSchema) })

    return(
            <>
                <div className="groupActivities">

                    <div className="activitiesTitle">   
                        <h3>Activities</h3>
                        <Button
                            setSize={"large"}
                            setColor={"var(--blue)"}   
                            click={() => setActivitiesPopUp(true)}
                            >+ Activities
                        </Button>
                    </div>
                    <div className="activitiesMain">
                    {
                    activitiesRenderList.map((activitie) => (
                        <Activities 
                            key={activitie.id} 
                            title={activitie.title} 
                            click={() => deleteActivitie(activitie)}                            
                        />
                    ))
                }

                    </div>
                </div>
                { activitiesPopUp && 
                    <PopUpContainer open={activitiesPopUp} onClose={handleCloseModal} >
                        
                       
                                <PopUp
                                    title='New Activity'
                                    onSubmit={handleSubmit(addActivitie)}
                                    onClickClose={handleNewActivitie}
                                    >
                                    <Input 
                                            register={register} 
                                            name='title' 
                                            placeholder='Title'
                                            setBorder='var(--green)'
                                    />
                                    <div className="erro">{errors.title?.message}</div>
                                </PopUp>
                            
                        
                    </PopUpContainer>
                }
            </>
    )
}

export default ActivitiesList