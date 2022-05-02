import React from "react"
import { Navigate } from "react-router-dom"

const CardLeft = ({ label, index, cardInfo }) => {
    if (cardInfo === null) { return <Navigate to='/cards' /> }

    switch (cardInfo[3]) {
        case 'Ж': {
            return cardInfo[3] = 'Женский'
        }
        case 'М': {
            return cardInfo[3] = 'Мужской'
        }
    }

    return (
        <>
            <div className="card__line">
                <div className="card__label">{label}</div>
                <div className="card__text">{cardInfo[index]}</div>
            </div>
        </>
    )
}

export default CardLeft;
