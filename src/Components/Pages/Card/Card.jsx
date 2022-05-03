import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

import './card.scss'

import Plan from '../../Common/Plan/Plan';
import Popup from '../../Common/Popup/Popup';
import CardRow from './CardRow/CardRow';
import CardLeft from './CardLeft/CardLeft';
import Information from '../Receptions/Filter/Records/Record/informations/Information/information';
import Last from '../Receptions/Filter/Records/Record/informations/Information/LastsRecords/Last';

import { fetchOneCard } from '../../../API/cardsApi';

import { cardLabels } from '../../../Arrays/labels';
import { card_info } from '../../../Arrays/card_info'; // TODO Должны приходить из cardInfo с остальной инфой о пациенте
import { last_records } from '../../../Arrays/last_records'; // TODO Должны приходить из cardInfo с остальной инфой о пациенте


const Card = ({ cardInfo }) => {


    const [popupActive, setPopupActive] = React.useState(false);
    const [card, setCard] = React.useState({ last_records: [] })
    const { card_num } = useParams()

    React.useEffect(() => {
        if (cardInfo === null) { return <Navigate to='/cards' /> }
        console.log(cardInfo);
        if (last_records.length === 0) {
            last_records.push({ position: 'Нет данных' })
        }
    }, [cardInfo])

    React.useEffect(() => {
        fetchOneCard(card_num).then(data => {
            setCard(data)
            console.log(data)
        })
    }, [])

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
                                        return <CardLeft
                                            key={`${label}_${index}`}
                                            label={label}
                                            cardInfo={cardInfo}
                                            index={index}
                                        />
                                    })}
                                </div>
                            </div>
                            <div className="card__right right-card">
                                <div className="right-card__body">
                                    {card_info.map((card, index) => {
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
                                    {last_records.map((obj, index) => {
                                        return (
                                            <div
                                                className="last-records-card__record"
                                                key={`${obj}_${index}`}
                                            >
                                                <Information
                                                    {...obj}
                                                    setPopupActive={setPopupActive}
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
            >
                <Last />
            </Popup>
        </>
    )
}

export default Card
