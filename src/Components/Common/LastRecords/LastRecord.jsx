import React from 'react'
import { useSelector } from 'react-redux'

import OutputCommon from '../OutputCommon/OutputCommon'

import './lastrecord.scss'


const LastRecord = ({ record }) => {

    const { usersData } = useSelector(({ usersReducer }) => usersReducer)
    const patient = usersData.filter(patient => patient.card_num === record?.info?.card_num)[0]

    const recordInfo = record?.info
    const recordInspection = record?.inspection

    const objToOutputColumnSwitch = {
        name: patient?.name,
        birth: patient?.birth,
        card_num: patient?.card_num,
        doctor: recordInfo?.doctor,
        clinic: recordInfo?.clinic,
        specialization: recordInfo?.specialization,
    }
    const objToOutputSwitch = {
        historyData: recordInspection?.historyData,
        statusData: recordInspection?.statusData,
        diagnosisData: recordInspection?.diagnosisData,
        complaints: recordInspection?.complaints,
        history: recordInspection?.history,
        status: recordInspection?.status,
        diagnosis: recordInspection?.diagnosis,
        survey: recordInspection?.survey,
    }

    return (
        <div
            style={{
                width: '630px',
                height: '891px',
                transform: 'scale(.9)',
                backgroundColor: 'var(--back-of-app)',
                overflow: 'scroll'
            }}
        >
            <div className="last-record">
                <div className="last-record__title">Выписка амбулаторного пациента</div>
                <OutputCommon
                    objToOutputColumnSwitch={objToOutputColumnSwitch}
                    objToOutputSwitch={objToOutputSwitch}
                />
            </div>
        </div>
    )
}

export default LastRecord
