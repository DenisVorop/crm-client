import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import info from '../../../../../../assets/img/Info.svg'
import infoBlue from '../../../../../../assets/img/Info-blue.svg'

import Informations from './informations/Informations'


const Record = ({ age, birth, card_num, card_info,
    fact_addres, first_name, first_record,
    last_name, last_record, marital_status, name,
    patronymic, phone, reg_addres, sex, policy, last_records,
    timeObj, time_index, status, startReception, id }) => {
    const { user } = useSelector(({ authReducer }) => authReducer)

    const onRedirectToReception = () => {
        const objPatientRecord = {
            last_name, first_name, patronymic, sex,
            birth, marital_status, reg_addres, fact_addres, card_num,
            phone, first_record, last_record, policy, name, card_info: { card_info },
            last_records: { last_records }, doctor: user, id, time_index,
        }
        startReception(objPatientRecord)
    }

    const [infoVisible, setInfoVisible] = React.useState(false)

    const toggleInfoVisible = React.useCallback(() => {
        setInfoVisible(!infoVisible)
    }, [infoVisible])

    let statusStyle = {}

    switch (status) {
        case 'Прием завершен': { statusStyle = { background: 'rgba(161, 246, 251, .4)', color: 'var(--primary-basic)' }; break }
        case 'Первичный прием': { statusStyle = { background: 'rgba(148, 227, 188, .4)', color: 'var(--positive-basic)' }; break }
        case 'Послеоперац-ный прием': { statusStyle = { background: 'var(--danger-no-contrast)', color: 'var(--danger-basic)' }; break }
        case 'Повторный прием': { statusStyle = { background: 'var(--warning-no-contrast)', color: 'var(--warning-basic)' }; break }
        default: { break }
    }

    return (
        <>
            <div className='records__row'>
                <div className='records__person' style={{ gridTemplateColumns: '0.5fr 2fr 1fr 1fr 0.5fr' }}>
                    <div className='records__column'>
                        {timeObj.map(time => {
                            if (time.time_index === time_index) {
                                return time.time
                            }
                        })}
                    </div>
                    <div className='records__column'>
                        {status !== 'Прием завершен'
                            ? <p onClick={onRedirectToReception}>
                                <Link to={`/receptions/${card_num}`}>
                                    {name}
                                </Link>
                            </p>
                            : name
                        }
                    </div>
                    <div className='records__column'>{sex}, {age}</div>
                    <div className='records__column' style={statusStyle}>{status}</div>
                    <div className='records__column'>
                        <span onClick={toggleInfoVisible} style={{ cursor: 'pointer' }}>
                            <img src={!infoVisible ? info : infoBlue} alt='info' />
                        </span>
                    </div>
                </div>
                <div className={!infoVisible ? 'info-visible' : 'info-visible active'}>
                    {infoVisible && <Informations last_records={last_records} />}
                </div>
            </div>
        </>
    )
}

export default Record
