import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import './plan.scss'

// import print from '../../../assets/img/print.svg'
import arrowExit from '../../../assets/img/arrows/arrow-exit.svg'


const Plan = ({ label }) => {

    const location = useLocation()
    const navigate = useNavigate()

    const goBack = () => location.pathname !== '/404' ? navigate(-1) : navigate(-2)

    return (
        <>
            <div className='plan'>
                <div className='plan__container'>
                    <div
                        className={location.pathname === '/receptions' || location.pathname === '/cards'
                            ? 'plan__header'
                            : 'plan__header plan__new'
                        }
                        style={location.pathname === '/receptions' || location.pathname === '/cards'
                            ? null
                            : { padding: '3px 0px', cursor: 'pointer' }
                        }
                        onClick={location.pathname === '/receptions' || location.pathname === '/cards'
                            ? null
                            : goBack
                        }
                    >
                        {location.pathname === '/cards'
                            ? null
                            : location.pathname !== '/receptions' &&
                            <div className='plan__print'>
                                <img
                                    src={arrowExit}
                                    alt='arrowExit'
                                />
                            </div>
                        }
                        <div className='plan__label'>{label}</div>
                    </div>
                    {location.pathname === '/receptions' || location.pathname === '/cards'
                        ? <div className='plan__new new-plan'>
                            <div className='new-plan__pat' style={{ cursor: 'pointer' }}>
                                <Link to='/new-patient'>Новый пациент</Link>
                            </div>
                            <div className='new-plan__rec' style={{ cursor: 'pointer' }}>
                                <Link to='/new-record'>Новая запись</Link>
                            </div>
                        </div>
                        : null
                    }
                </div>
            </div>
        </>
    )
}

export default Plan
