import Activities from './Activities';
import Button from '../../../components/button/Button'
import { useState, useEffect } from 'react'
import {PopUp} from '../../../components/pop-up/PopUp';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../../../components/Input/Input.jsx';
import { toast } from 'react-toastify';
import { api } from '../../../service/api';
import { PopUpContainer} from "../styles"

const ActivitiesList = () => {
    
    const formSchema = yup.object().shape({
        title: yup.string().required('This field is required'),
    })

    const params = JSON.parse( localStorage.getItem('@tasky/dashboard/group') );

    const { register, handleSubmit, formState: { errors }
            } = useForm({ resolver: yupResolver(formSchema)
        })

    const [activitiesRenderList, setActivitiesRenderList] = useState([])

    const userToken = JSON.parse( localStorage.getItem('@tasky/login/token') );

    const [activitiesPopUp, setActivitiesPopUp] = useState(false)


    const handleLoadActivities = (id) => {
        api.get(`/groups/${id}/`, {
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken}`,
            },
            })
            .then(response => setActivitiesRenderList(response.data.activities))
    };

    const handleAct = ()=>{
        setActivitiesPopUp(!activitiesPopUp)
    }

    const addActivitie = ({title}) => {
        const activitieAddTitle = {
            title,
            realization_time: "2021-03-10T15:00:00Z",
            group: params
        }
        api.post(
            '/activities/',
            activitieAddTitle,
            {
                headers: {
                    Authorization: `Bearer ${userToken}`,
                },
            }
        )
        .then((_)=>{
            toast.success(`Activity Added!`)
            handleLoadActivities(params)
            handleAct()
            })
        .catch((_)=> toast.error("Something went wrong, try again!"))
    }

    const deleteActivitie = (activitie) =>{
        api.delete(
            `/activities/${activitie.id}/`,
                {
                    headers: {
                        Authorization: `Bearer ${userToken}`,
                    },
            })
                .then((_)=>{
                    toast.success(`${activitie.title} Done!`)
                    handleLoadActivities(params)
                })
                .catch((_)=> toast.error("Something went wrong, try again!"))
    }


    useEffect(() => {
        handleLoadActivities(params);
      }, [params]);

    const handleCloseModal = () => {
        setActivitiesPopUp(false);
    }


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
                                    onClickClose={handleCloseModal}
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