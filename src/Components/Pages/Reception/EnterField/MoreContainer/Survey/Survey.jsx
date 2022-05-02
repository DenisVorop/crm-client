import React from 'react'

import arrowB from '../../../../../../assets/img/arrow-b.svg'
import arrowT from '../../../../../../assets/img/arrow-t.svg'

import './survey.scss'

const Survey = ({ label, visible, setVisible }) => {
    const surveys = [
        'МКОЗ в даль', 'МКОЗ в близи с коррекцией', 'МКОЗ в своих очках (в даль)', 'МКОЗ в своих очках (в близь)',
        'Visus в близи без коррекции', 'Характер зрения', 'Бинокулярный'
    ]
    const diseases = ['', 'VISUS', 'Sph', 'Cyl', 'Ax', 'МКОЗ']

    const [activeItem, setActiveItem] = React.useState('МКОЗ в даль')

    return (
        <div className="survey">
            <div className="survey__body">
                <div className="survey__set-survey" onClick={() => setVisible(!visible)}>
                    <img src={visible ? arrowT : arrowB} alt="arrow-b" />
                    <div className="field-more__label">{label}</div>
                </div>
                {visible && <>
                    <div className="survey__items">
                        {surveys.map((survey, index) => {
                            return (
                                <div
                                    className={activeItem === survey ? "survey__item survey__item-active" : "survey__item"}
                                    key={`${survey}_${index}`}
                                    onClick={() => setActiveItem(survey)}
                                >
                                    {survey}
                                </div>
                            )
                        })}
                    </div>
                    <div className="survey__field">
                        <div className="survey__diseases">
                            {diseases.map((diseas, index) => {
                                return (
                                    <div
                                        className="survey__row"
                                        key={`${diseas}_${index}`}
                                    >
                                        <div className="survey__diseas">
                                            {diseas}
                                        </div>
                                        {diseas !== ''
                                            ? <>
                                                <div className="survey__input">
                                                    <input type="text" />
                                                </div>
                                                <div className="survey__input">
                                                    <input type="text" />
                                                </div>
                                            </>
                                            : <>
                                                <div className="survey__input">
                                                    OD
                                                </div>
                                                <div className="survey__input">
                                                    OS
                                                </div>
                                            </>
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </>}
            </div>
        </div>
    )
}

export default Survey
