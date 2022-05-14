import React from 'react'

import Popup from '../../../../../../Common/Popup/Popup'
import LastRecord from '../../../../../../Common/LastRecords/LastRecord'
import EmptySearch from '../../../../../../Common/EmptySearch/EmptySearch'

import Information from './Information/information'

import './information.scss'


const Informations = ({ last_records }) => {

    const [popupActive, setPopupActive] = React.useState(false)
    const [popupActiveIndex, setPopupActiveIndex] = React.useState(null)

    const cloneLastRecords = Array.from(last_records)

    return (
        <div className='information'>
            <div className='information__container'>
                <div className='information__body'>
                    <div className='information__lasts lasts-information'>
                        <div className='information__label bold'>Последние приемы</div>
                        <div className='lasts-information__records'>
                            {cloneLastRecords.length !== 0
                                ? cloneLastRecords.map((obj, index) => {
                                    for (; index < 3;) {
                                        return <Information
                                            key={`${obj}_${index}`}
                                            setPopupActive={setPopupActive}
                                            setPopupActiveIndex={setPopupActiveIndex}
                                            {...obj}
                                            date_last_record={obj?.info?.date}
                                            index={index}
                                            {...obj?.info}
                                            {...obj?.inspection}
                                        />
                                    }
                                })
                                : <EmptySearch />}
                        </div>
                    </div>
                    <div className='information__lasts lasts-information'>
                        <div className='information__label bold'>Комментарий администратора</div>
                        <div className='lasts-information__records' style={{ paddingLeft: '15px' }}>
                            <p
                                style={{
                                    fontSize: '14px',
                                    color: '#3B584F',
                                }}
                            >
                                Я не знаю, что здесь написать, наверное какой-то комментарий...</p>
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
        </div>
    )
}

export default Informations
