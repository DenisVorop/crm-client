import React from 'react'


const OutputColumnSwitch = ({ label, objToOutputColumnSwitch }) => {

    let text

    switch (label) {
        case 'ФИО пациента': {
            text = objToOutputColumnSwitch.name
            break
        }
        case 'Дата рождения': {
            text = objToOutputColumnSwitch.birth
            break
        }
        case 'Карта пациента': {
            text = objToOutputColumnSwitch.card_num
            break
        }
        case 'Дата': {
            text = '15.04.2022'
            break
        }
        case 'Врач': {
            text = objToOutputColumnSwitch.doctor
            break
        }
    }

    return (
        <div className="output__column">
            <div className="output__rows">
                <div className="output__row-label">{label}</div>
                <div className="output__row">{text}</div>
            </div>
        </div>
    )

}

export default OutputColumnSwitch
