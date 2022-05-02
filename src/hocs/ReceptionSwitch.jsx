import React from 'react'


const ReceptionSwitch = ({ label, objToReceptionSwitch }) => {

    let text

    switch (label) {
        case 'Дата': {
            text = objToReceptionSwitch.date
            break
        }
        case 'Врач': {
            text = objToReceptionSwitch.doctor
            break
        }
        case 'ФИО пациента': {
            text = objToReceptionSwitch.patient
            break
        }
        case 'Полис ОМС': {
            text = objToReceptionSwitch.policy
            break
        }
        case 'Номер карты': {
            text = objToReceptionSwitch.card_num
            break
        }
        case 'Место приема': {
            text = objToReceptionSwitch.location
            break
        }
    }

    return (
        <div className="admission-info-reception__column">
            <div className="admission-info-reception__label">{label}</div>
            <div className="admission-info-reception__text">{text}</div>
        </div>
    )

}

export default ReceptionSwitch
