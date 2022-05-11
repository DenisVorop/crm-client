import React from 'react';

import eye from '../../../../../../../../assets/img/eye.svg';


const Information = ({ setPopupActive, specialization, name_doctor,
    date_last_record, clinic, doctor, setPopupActiveIndex, index }) => {

    name_doctor = doctor

    return (
        <div className="information__last last-information">
            <div className="last-information__doctor">
                <div className="last-information__label" >{specialization}</div>
                <div className="last-information__name">{name_doctor}</div>
            </div>
            <div className="last-information__item">
                <div className="last-information__left">
                    <div className="last-information__date">{date_last_record}</div>
                    <div className="last-information__building">{clinic}</div>
                </div>
                <div className="last-information__see">
                    <span className='last-information__more-see'>Посмотреть заключение</span>
                    <span
                        style={{ cursor: 'pointer' }}
                        onClick={() => (setPopupActiveIndex(index), setPopupActive(true))}
                    >
                        <img src={eye} alt="eye" />
                    </span>
                </div>
            </div>
        </div>
    )
}


export default Information
