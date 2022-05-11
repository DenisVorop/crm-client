import React from 'react';
import { Navigate } from 'react-router-dom';

import './card.scss'

import Preloader from '../../Common/Preloader/Preloader';
import Plan from '../../Common/Plan/Plan';
import Popup from '../../Common/Popup/Popup';
import LastRecord from '../../Common/LastRecords/LastRecord';
import CardRow from './CardRow/CardRow';
import Information from '../Receptions/Filter/Records/Record/informations/Information/information';

import { cardLabels } from '../../../Arrays/labels';

import CardLeftSwitch from '../../../hocs/CardLeftSwitch';



const Card = ({ cardId }) => {

    const [popupActive, setPopupActive] = React.useState(false);
    const [popupActiveIndex, setPopupActiveIndex] = React.useState(null);

    const [card, setCard] = React.useState([])
    const [lastRecords, setLastRecords] = React.useState([])
    const [cardInfo, setCardInfo] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        getPatientCard(cardId).then((data) => {
            setCard(data)
            setLastRecords(data.last_records)
            setCardInfo(data.card_info)
            setLoading(false)
        })
    }, [])

    let cloneLastRecords = Array.from(lastRecords)

    if (cardId === null) return <Navigate to='/cards' />

    async function getPatientCard(cardId) {
        const response = await fetch(`http://localhost:8000/cards/${cardId}`, {
            method: 'GET',
        })
        return await response.json()
    }

    switch (card.sex) {
        case 'М':
            return card.sex = 'Мужской'
        case 'Ж':
            return card.sex = 'Женский'
    }

    if (loading) {
        return <Preloader />
    } else {
        return (
            <>
                <Plan
                    label='Карта пациента'
                />
                <div className="card">
                    <div className="card__container">
                        <div className="card__body">
                            <div className="card__info">
                                <div className="card__left left-card">
                                    <div className="left-card__body">
                                        {cardLabels.map((label, index) => {
                                            return <CardLeftSwitch
                                                key={`${label}_${index}`}
                                                label={label}
                                                card={card}
                                            />
                                        })}
                                    </div>
                                </div>
                                <div className="card__right right-card">
                                    <div className="right-card__body">
                                        {cardInfo.map((card, index) => {
                                            return <CardRow
                                                key={`${card}_${index}`}
                                                card={card}
                                            />
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="card__last-records last-records-card">
                                <div className="last-records-card__body">
                                    <div className="last-records-card__title">Последние приемы</div>
                                    <div className="last-records-card__records">
                                        {lastRecords.map((obj, index) => {
                                            return (
                                                <div
                                                    className="last-records-card__record"
                                                    key={`${obj}_${index}`}
                                                >
                                                    <Information
                                                        setPopupActive={setPopupActive}
                                                        setPopupActiveIndex={setPopupActiveIndex}
                                                        {...obj}
                                                        date_last_record={obj?.info?.date}
                                                        index={index}
                                                        {...obj?.info}
                                                        {...obj?.inspection}
                                                    />
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Popup
                    popupActive={popupActive}
                    setPopupActive={setPopupActive}
                    setPopupActiveIndex={setPopupActiveIndex}
                >
                    <LastRecord record={cloneLastRecords[popupActiveIndex]} />
                </Popup>
            </>
        )
    }
}

export default Card
