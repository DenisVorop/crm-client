import React from 'react'
import { Link } from "react-router-dom"


const PatientCard = ({ age, card_num, name, phone, sex, getPatientId, policy, id }) => {

    const onRedirectToPatientCard = () => {
        getPatientId(id)
    }

    return (
        <div className="records__row">
            <div className="records__person" style={{ gridTemplateColumns: '3fr 1.3fr 2fr 2fr 2fr' }}>
                <div className="records__column">
                    <p onClick={onRedirectToPatientCard}>
                        <Link to={`/card/${card_num}`}>
                            {name}
                        </Link>
                    </p>
                </div>
                <div className="records__column">{sex}, {age}</div>
                <div className="records__column">{card_num}</div>
                <div className="records__column">{policy}</div>
                <div className="records__column">{phone}</div>
            </div>
            <div className='info-visible'></div>
        </div>
    )
}

export default PatientCard
