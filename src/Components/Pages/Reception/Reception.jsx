import React from 'react'
import { Link, Navigate } from "react-router-dom"
import { useDispatch } from 'react-redux'

import Button from "../../Common/Button/Button"
import Plan from "../../Common/Plan/Plan"
import Output from './OutputItem/Output'

import ReceptionDoc from '../../Docs/ReceptionDoc'

import './reception.scss'

import EnterFieldSwitch from '../../../hocs/EnterFieldSwitch'
import OutputFieldSwitch from '../../../hocs/OutputFieldSwitch'
import ReceptionSwitch from '../../../hocs/ReceptionSwitch'

import { enterFields } from '../../../Arrays/fields'
import { receptionLabels, outputPatientLabels, outputRecordLabels } from '../../../Arrays/labels'

// import { savePatientRecord } from '../../../Redux/Reducers/recordReducer'
import { savePatientRecord } from '../../../Redux/Reducers/usersReducer'
import OutputCommon from '../../Common/OutputCommon/OutputCommon'


const Reception = ({ receptionInfo }) => {

    const dispatch = useDispatch()

    const [historyData, setHistoryData] = React.useState([])
    const [statusData, setStatusData] = React.useState([])
    const [diagnosisData, setDiagnosisData] = React.useState([])

    // Темы полей ввода
    const [complaintsVisible, setComplaintsVisible] = React.useState(true) // 1 жалобы
    const [complaints, setComplaints] = React.useState({ first: '', second: '', third: '' }) // 1 жалобы  complaints
    const [historyVisible, setHistoryVisible] = React.useState(false) // 2 анамнез
    const [history, setHistory] = React.useState({ first: '', second: '', third: '' }) // 2 анамнез  history
    const [statusVisible, setStatusVisible] = React.useState(false) // 3 статус
    const [status, setStatus] = React.useState({ first: '', second: '', third: '' }) // 3 статус  status
    const [diagnosisVisible, setDiagnosisVisible] = React.useState(false) // 4 диагноз
    const [diagnosis, setDiagnosis] = React.useState({ first: '', second: '', third: '' }) // 4 диагноз  diagnosis
    const [surveyVisible, setSurveyVisible] = React.useState(false) // 5 данные обследований
    const [survey, setSurvey] = React.useState({ first: '', second: '', third: '' }) // 5 данные обследований  survey

    const getHistoryData = React.useCallback((histData) => {
        setHistoryData(histData)
    }, [historyData])
    const getStatusData = React.useCallback((statData) => {
        setStatusData(statData)
    }, [statusData])
    const getDiagnosisData = React.useCallback((diagData) => {
        setDiagnosisData(diagData)
    }, [diagnosisData])

    if (receptionInfo === null) { return <Navigate to='/receptions' /> }

    const { last_name, first_name, patronymic, sex,
        birth, marital_status, reg_addres, fact_addres, card_num,
        phone, first_record, last_record, policy, name, card_info: { card_info },
        last_records: { last_records }, id } = receptionInfo

    // TODO: переделать компонент инпут

    const objToInputSwitch = {
        complaintsVisible, complaints, setComplaints,
        historyVisible, history, setHistoryVisible, setHistory,
        statusVisible, status, setStatusVisible, setStatus,
        diagnosisVisible, diagnosis, setDiagnosisVisible, setDiagnosis,
        surveyVisible, survey, setSurveyVisible, setSurvey,

        getHistoryData, getStatusData, getDiagnosisData,
    }
    const objToOutputColumnSwitch = {
        name, birth, card_num, doctor: receptionInfo.doctor.name,
    }
    const objToOutputSwitch = {
        historyData, statusData, diagnosisData,
        complaints, history, status, diagnosis, survey,
    }
    const objToReceptionSwitch = {
        date: '15.04.2022',
        doctor: receptionInfo.doctor.name,
        patient: name,
        policy: policy,
        card_num: card_num,
        clinic: receptionInfo.doctor.clinic,
        specialization: receptionInfo.doctor.specialization,
        patientId: id,
    }

    const endPatientRecord = () => {
        dispatch(savePatientRecord({ info: objToReceptionSwitch, inspection: objToOutputSwitch }))
    }

    return (
        <>
            <Plan label='Редактирование приема' />
            <div className="reception" style={{ minHeight: '1150px' }}>
                <div className="reception__container">
                    <div className="reception__body">
                        <div className="reception__title">Данные пациента</div>
                        <div className="reception__admission-info admission-info-reception">
                            {receptionLabels.map((label, index) => {
                                return <ReceptionSwitch
                                    key={`${label}_${index}`}
                                    label={label}
                                    objToReceptionSwitch={objToReceptionSwitch}
                                />
                            })}
                        </div>
                        <div className="reception__rows">
                            <div className="reception__part">
                                {enterFields.map((field, index) => {
                                    return <EnterFieldSwitch
                                        key={`${field}_${index}`}
                                        field={field}
                                        objToInputSwitch={objToInputSwitch}
                                    />
                                })}
                            </div>
                            <div className="reception__part">
                                <OutputCommon
                                    objToOutputColumnSwitch={objToOutputColumnSwitch}
                                    objToOutputSwitch={objToOutputSwitch}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="reception__save" onClick={endPatientRecord}>
                        <Link to='/receptions'>
                            <Button label='Сохранить изменения' />
                        </Link>
                    </div>
                    <ReceptionDoc />
                </div>
            </div>
        </>
    )
}

export default Reception
