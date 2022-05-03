import React from 'react'

import OutputColumnSwitch from "../../../../hocs/OutputColumnSwitch"


const Output = ({outputPatientLabels, outputRecordLabels, objToOutputColumnSwitch, }) => {

    return (
        <div className="output">
            <div className="output__body">
                <div className="output__items">
                    <div className="output__item">
                        <div className="output__title">Данные пациента</div>
                        <div className="output__columns">
                            {outputPatientLabels.map((label, index) => {
                                return <OutputColumnSwitch
                                    key={`${label}_${index}`}
                                    label={label}
                                    objToOutputColumnSwitch={objToOutputColumnSwitch}
                                />
                            })}
                        </div>
                    </div>
                    <div className="output__item">
                        <div className="output__title">Данные приема</div>
                        <div className="output__columns">
                            {outputRecordLabels.map((label, index) => {
                                return <OutputColumnSwitch
                                    key={`${label}_${index}`}
                                    label={label}
                                    objToOutputColumnSwitch={objToOutputColumnSwitch}
                                />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Output
