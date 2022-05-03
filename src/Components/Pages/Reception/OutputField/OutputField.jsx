import React from 'react'

import './output.scss'


const OutputField = ({ field, firstInputText, secondInputText,
    thirdInputText, historyData, statusData, diagnosisData, index }) => {

    const [labelsData, setLabelsData] = React.useState(field.addMore)

    return (
        <>
            {field.label !== 'Данные обследований'
                ? <div className='output'>
                    <div className="output__item">
                        <div className="output__title">{field.label}</div>
                        <div className="output__output-field output-field__output">
                            <div className="output-field__body">
                                <div className="output-field__items">
                                    <div className="output-field__labels">
                                        <div className="output-field__label">Глаз</div>
                                        <div className="output-field__label">Запись</div>
                                    </div>
                                    <div className="output-field__item">
                                        <div className="output-field__eye">OS</div>
                                        <div className="output-field__entry">{firstInputText}</div>
                                    </div>
                                    <div className="output-field__item">
                                        <div className="output-field__eye">OU</div>
                                        <div className="output-field__entry">{secondInputText}</div>
                                    </div>
                                    <div className="output-field__item">
                                        <div className="output-field__eye">OD</div>
                                        <div className="output-field__entry">{thirdInputText}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='output__labels'>
                        {index === 1
                            ? historyData.map((historyField, index) => {
                                return (
                                    <div
                                        key={`${historyField}_${index}`}
                                    >
                                        <div className='output__row-label'>{labelsData[index].label}</div>
                                        <div style={{ marginBottom: '5px', fontSize: '16px', lineHeight: '22px' }}>{historyField.first}</div>
                                        <div style={{ marginBottom: '5px', fontSize: '16px', lineHeight: '22px' }}>{historyField.second}</div>
                                        <div style={{ marginBottom: '5px', fontSize: '16px', lineHeight: '22px' }}>{historyField.third}</div>
                                    </div>
                                )
                            })
                            : index === 2
                                ? statusData.map((statusField, index) => {
                                    return (
                                        <div
                                            key={`${statusField}_${index}`}
                                        >
                                            <div className='output__row-label'>{labelsData[index].label}</div>
                                            <div style={{ marginBottom: '5px', fontSize: '16px', lineHeight: '22px' }}>{statusField.first}</div>
                                            <div style={{ marginBottom: '5px', fontSize: '16px', lineHeight: '22px' }}>{statusField.second}</div>
                                            <div style={{ marginBottom: '5px', fontSize: '16px', lineHeight: '22px' }}>{statusField.third}</div>
                                        </div>
                                    )
                                })
                                : index === 3
                                    ? diagnosisData.map((diagnosisField, index) => {
                                        return (
                                            <div
                                                key={`${diagnosisField}_${index}`}
                                            >
                                                <div className='output__row-label'>{labelsData[index].label}</div>
                                                <div style={{ marginBottom: '5px', fontSize: '16px', lineHeight: '22px' }}>{diagnosisField.first}</div>
                                                <div style={{ marginBottom: '5px', fontSize: '16px', lineHeight: '22px' }}>{diagnosisField.second}</div>
                                                <div style={{ marginBottom: '5px', fontSize: '16px', lineHeight: '22px' }}>{diagnosisField.third}</div>
                                            </div>
                                        )
                                    })
                                    : null
                        }
                    </div>
                </div>
                : null
            }
        </>
    )
}

export default OutputField
