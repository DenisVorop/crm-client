import React from 'react'
import { Navigate } from "react-router-dom"
import Button from "../../Common/Button/Button"

import Plan from "../../Common/Plan/Plan"

import './reception.scss'

import EnterField from './EnterField/EnterField'

const Reception = ({ receptionInfo }) => {

    const [complaintsVisible, setComplaintsVisible] = React.useState(true) // 1
    const [historyVisible, setHistoryVisible] = React.useState(true) // 2
    const [statusVisible, setStatusVisible] = React.useState(false) // 3
    const [diagnosisVisible, setDiagnosisVisible] = React.useState(false) // 4

    if (receptionInfo === null) { return <Navigate to='/receptions' /> }

    const { last_name, first_name, patronymic, sex,
        birth, marital_status, reg_addres, fact_addres, card_num,
        phone, first_record, last_record, policy, name, card_info: { card_info },
        last_records: { last_records } } = receptionInfo

    // TODO: переделать компонент инпут

    const fields = [
        {
            label: 'Жалобы пациента', text: 'опишите, на что жалуется больной'
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
            label: 'Диагноз', text: 'все диагнозы, которые нужно отразить в истории болезни, коды МКБ-10 добавятся автоматически'
        },
        // {
        //     label: 'Назначение до операции', text: 'препараты появятся в листе назначений до дня проведения операции'
        // },
        // {
        //     label: 'Назначение после выписки', text: 'препараты появятся в назначения выписсного эпикриза'
        // }
    ]

    return (
        <>
            <Plan label='Редактирование приема' />
            <div className="reception" style={{ height: '10000px' }}>
                <div className="reception__container">
                    <div className="reception__body">
                        <div className="reception__title">Осмотр специалиста</div>
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
                            {fields.map((field, index) => {
                                let visible
                                let setVisible = function () { }
                                let nextVisible = function () { }
                                switch (field.label) {
                                    case 'Жалобы пациента': {
                                        visible = complaintsVisible
                                        // setVisible = setComplaintsVisible
                                        nextVisible = setHistoryVisible
                                        break
                                    }
                                    case 'Анамнез пациента': {
                                        visible = historyVisible
                                        setVisible = setHistoryVisible
                                        nextVisible = setStatusVisible
                                        break
                                    }
                                    case 'Status ophtalmicus': {
                                        visible = statusVisible
                                        setVisible = setStatusVisible
                                        nextVisible = setDiagnosisVisible
                                        break
                                    }
                                    case 'Диагноз': {
                                        visible = diagnosisVisible
                                        setVisible = setDiagnosisVisible
                                        // nextVisible = setOperationsVisible
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
                                    />
                                )
                            })}
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
