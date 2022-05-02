import React from 'react'
import { Navigate } from "react-router-dom"
import Button from "../../Common/Button/Button"

import Plan from "../../Common/Plan/Plan"

import './reception.scss'

import EnterField from './EnterField/EnterField'
import OutputField from './OutputField/OutputField'

import './Output/output.scss'

const Reception = ({ receptionInfo }) => {

    const [historyData, setHistoryData] = React.useState([])
    const [statusData, setStatusData] = React.useState([])
    const [diagnosisData, setDiagnosisData] = React.useState([])

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

    if (receptionInfo === null) { return <Navigate to='/receptions' /> }

    const { last_name, first_name, patronymic, sex,
        birth, marital_status, reg_addres, fact_addres, card_num,
        phone, first_record, last_record, policy, name, card_info: { card_info },
        last_records: { last_records } } = receptionInfo

    // TODO: переделать компонент инпут

    const fields = [
        {
            label: 'Жалобы пациента', text: 'опишите, на что жалуется больной',
            addMore: [
                { label: '' }, { label: '' }, { label: '' }
            ]
        },
        {
            label: 'Анамнез пациента', text: 'краткая история заболевания',
            addMore: [
                { label: 'Аллергологический анамнез' }, { label: 'Фармакологический анамнез' }, { label: 'Операции на глаза' }
            ]
        },
        {
            label: 'Status ophtalmicus', text: 'состояние глаз пациента',
            addMore: [
                { label: 'Придаточный аппарат глаза' }, { label: 'Роговица' }, { label: 'Передняя камера' },
                { label: 'Радужка' }, { label: 'Хрусталик' }, { label: 'Стекловидное тело' },
                { label: 'ДЗН' }, { label: 'Задний отрезок глаза ' }
            ]
        },
        {
            label: 'Диагноз', text: 'все диагнозы, которые нужно отразить в истории болезни, коды МКБ-10 добавятся автоматически',
            addMore: [
                { label: 'Основной диагноз' }, { label: 'Сопутствующий профильный диагноз' }, { label: 'Сопутствующий соматический диагноз' }
            ]
        },
        {
            label: 'Данные обследований', text: '',
            addMore: [
                { label: 'Визометрия + ВГД' }, { label: 'Визометрия при циклоплегии' },
                { label: 'Пахиметрическая карта' }, { label: 'Авторефрактометрия' },
            ]
        },
        // {
        //     label: 'Назначение до операции', text: 'препараты появятся в листе назначений до дня проведения операции'
        // },
        // {
        //     label: 'Назначение после выписки', text: 'препараты появятся в назначения выписсного эпикриза'
        // }
    ]

    const getHistoryData = (histData) => {
        setHistoryData(histData)
    }
    const getStatusData = (statData) => {
        setStatusData(statData)
    }
    const getDiagnosisData = (diagData) => {
        setDiagnosisData(diagData)
    }


    return (
        <>
            <Plan label='Редактирование приема' />
            <div className="reception" style={{ minHeight: '1070px' }}>
                <div className="reception__container">
                    <div className="reception__body">
                        <div className="reception__title">Данные пациента</div>
                        <div className="reception__admission-info admission-info-reception">
                            <div className="admission-info-reception__column">
                                <div className="admission-info-reception__label">Дата</div>
                                <div className="admission-info-reception__text">15.04.2022</div>
                            </div>
                            <div className="admission-info-reception__column">
                                <div className="admission-info-reception__label">Врач</div>
                                <div className="admission-info-reception__text">Иванова И. Ю.</div>
                            </div>
                            <div className="admission-info-reception__column">
                                <div className="admission-info-reception__label">Пациент</div>
                                <div className="admission-info-reception__text">{name}</div>
                            </div>
                            <div className="admission-info-reception__column">
                                <div className="admission-info-reception__label">Полис ОМС</div>
                                <div className="admission-info-reception__text">{policy}</div>
                            </div>
                            <div className="admission-info-reception__column">
                                <div className="admission-info-reception__label">Номер карты</div>
                                <div className="admission-info-reception__text">{card_num}</div>
                            </div>
                            <div className="admission-info-reception__column">
                                <div className="admission-info-reception__label">Место приема</div>
                                <div className="admission-info-reception__text">Филиал в Новых Черемушках №2</div>
                            </div>
                        </div>
                        <div className="reception__rows">
                            <div className="reception__part">
                                {fields.map((field, index) => {
                                    let visible
                                    let value
                                    let setVisible = function () { }
                                    let nextVisible = function () { }
                                    let setValue = function () { }
                                    switch (field.label) {
                                        case 'Жалобы пациента': {
                                            visible = complaintsVisible
                                            // setVisible = setComplaintsVisible
                                            nextVisible = setHistoryVisible
                                            value = complaints
                                            setValue = setComplaints
                                            break
                                        }
                                        case 'Анамнез пациента': {
                                            visible = historyVisible
                                            setVisible = setHistoryVisible
                                            nextVisible = setStatusVisible
                                            value = history
                                            setValue = setHistory
                                            break
                                        }
                                        case 'Status ophtalmicus': {
                                            visible = statusVisible
                                            setVisible = setStatusVisible
                                            nextVisible = setDiagnosisVisible
                                            value = status
                                            setValue = setStatus
                                            break
                                        }
                                        case 'Диагноз': {
                                            visible = diagnosisVisible
                                            setVisible = setDiagnosisVisible
                                            nextVisible = setSurveyVisible
                                            value = diagnosis
                                            setValue = setDiagnosis
                                            break
                                        }
                                        case 'Данные обследований': {
                                            visible = surveyVisible
                                            setVisible = setSurveyVisible
                                            // nextVisible =
                                            value = survey
                                            setValue = setSurvey
                                            break
                                        }
                                    }
                                    return (
                                        <EnterField
                                            key={`${field}_${index}`}
                                            field={field}
                                            visible={visible}
                                            setVisible={setVisible}
                                            nextVisible={nextVisible}
                                            setValue={setValue}
                                            value={value}
                                            getHistoryData={getHistoryData}
                                            getStatusData={getStatusData}
                                            getDiagnosisData={getDiagnosisData}
                                        />
                                    )
                                })}
                            </div>
                            <div className="reception__part">
                                <div className="output">
                                    <div className="output__body">
                                        <div className="output__items">
                                            <div className="output__item">
                                                <div className="output__title">Данные пациента</div>
                                                <div className="output__columns">
                                                    <div className="output__column">
                                                        <div className="output__rows">
                                                            <div className="output__row-label">ФИО</div>
                                                            <div className="output__row">{name}</div>
                                                        </div>
                                                    </div>
                                                    <div className="output__column">
                                                        <div className="output__rows">
                                                            <div className="output__row-label">Дата рождения</div>
                                                            <div className="output__row">{birth}</div>
                                                        </div>
                                                    </div>
                                                    <div className="output__column">
                                                        <div className="output__rows">
                                                            <div className="output__row-label">Карта пациента</div>
                                                            <div className="output__row">{card_num}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="output__item">
                                                <div className="output__title">Данные приема</div>
                                                <div className="output__columns">
                                                    <div className="output__column">
                                                        <div className="output__rows">
                                                            <div className="output__row-label">Дата</div>
                                                            <div className="output__row">14.03.2021</div>
                                                        </div>
                                                    </div>
                                                    <div className="output__column">
                                                        <div className="output__rows">
                                                            <div className="output__row-label">Врач</div>
                                                            <div className="output__row">Иванова И. Ю.</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="outputs">
                                    {fields.map((field, index) => {
                                        let firstInputText
                                        let secondInputText
                                        let thirdInputText
                                        switch (field.label) {
                                            case 'Жалобы пациента': {
                                                firstInputText = complaints.first
                                                secondInputText = complaints.second
                                                thirdInputText = complaints.third
                                                break
                                            }
                                            case 'Анамнез пациента': {
                                                firstInputText = history.first
                                                secondInputText = history.second
                                                thirdInputText = history.third
                                                break
                                            }
                                            case 'Status ophtalmicus': {
                                                firstInputText = status.first
                                                secondInputText = status.second
                                                thirdInputText = status.third
                                                break
                                            }
                                            case 'Диагноз': {
                                                firstInputText = diagnosis.first
                                                secondInputText = diagnosis.second
                                                thirdInputText = diagnosis.third
                                                break
                                            }
                                        }
                                        return (
                                            <OutputField
                                                key={`${field}_${index}`}
                                                field={field}
                                                firstInputText={firstInputText}
                                                secondInputText={secondInputText}
                                                thirdInputText={thirdInputText}
                                                index={index}
                                                historyData={historyData}
                                                statusData={statusData}
                                                diagnosisData={diagnosisData}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="reception__save">
                        <Button label='Сохранить изменения' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reception
