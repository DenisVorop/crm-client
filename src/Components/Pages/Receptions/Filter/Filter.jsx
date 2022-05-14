import React from 'react'
import { useSelector } from 'react-redux'

import Patients from '../../../Common/Patients/Patients'

import Head from './Head/Head'


import Records from './Records/Records'

import './filter.scss'


const Filter = ({ startReception }) => {

    const { usersData } = useSelector(({ usersReducer }) => usersReducer)

    const [activeUsers, setActiveUsers] = React.useState(null)
    const [num, setNum] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const receptionsRef = React.useRef()

    React.useEffect(() => {
        if (usersData.length !== 0) {
            setActiveUsers(usersData)
            setTimeout(() => setLoading(false), 0)
        }
    }, [usersData])

    const onSearchClick = React.useCallback(() => {
        let filteredUsers
        if (!num) {
            filteredUsers = usersData.filter(user => user.name.toLowerCase().includes(receptionsRef.current.value.toLowerCase()))
        } else {
            filteredUsers = usersData.filter(user => user.card_num.toLowerCase().includes(receptionsRef.current.value.toLowerCase()))
        }
        setActiveUsers(filteredUsers)
    }, [num, usersData])

    const onToggleCheck = React.useCallback(() => {
        setNum(!num)
    }, [num])

    return (
        <div className='filter'>
            <div className='filter__container'>
                <Head
                    onSearchClick={onSearchClick}
                    receptionsRef={receptionsRef}
                    onToggleCheck={onToggleCheck}
                    num={num}
                />
                <div>
                    <Patients
                        stylePatients={{ gridTemplateColumns: '0.5fr 2fr 1fr 1fr 0.5fr' }}
                    />
                    <Records
                        activeUsers={activeUsers}
                        startReception={startReception}
                        loading={loading}
                    />
                </div>
            </div>
        </div>
    )
}

export default Filter
