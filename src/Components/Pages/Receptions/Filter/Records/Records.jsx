import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import EmptySearch from '../../../../Common/EmptySearch/EmptySearch'
import Preloader from '../../../../Common/Preloader/Preloader'

import { getTodayRecords } from '../../../../../Redux/Reducers/usersReducer'

import Record from './Record/Record'

import './records.scss'


const Records = ({ activeUsers, startReception, loading }) => {

    const { timesData } = useSelector(({ usersReducer }) => usersReducer)
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(getTodayRecords())
    }, [])

    return (
        <div className='records__body'>
            {loading
                ? <Preloader />
                : activeUsers.map((obj, index) => {
                    return <Record
                        timeObj={timesData}
                        key={`${obj}_${index}`}
                        {...obj}
                        startReception={startReception}
                    />
                })}
            {!loading && activeUsers.length === 0
                ? <EmptySearch />
                : null
            }
        </div>
    )
}

export default Records
