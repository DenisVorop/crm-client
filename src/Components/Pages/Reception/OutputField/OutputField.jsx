import React from 'react'

import './output.scss'


const OutputField = ({ field, firstInputText, secondInputText,
    thirdInputText, historyData, statusData, diagnosisData, index }) => {

    const [labelsData] = React.useState(field.addMore)

    return (
        <>
            {field.label !== 'Данные обследований'
                ? <div className='output'>
                    <div className='output__item'>
                        <div className='output__title'>{field.label}</div>
                        <div className='output__output-field output-field__output'>
                            <div className='output-field__body'>
                                <div className='output-field__items'>
                                    <div className='output-field__labels'>
                                        <div className='output-field__label'>Глаз</div>
                                        <div className='output-field__label'>Запись</div>
                                    </div>
                                    <div className='output-field__item'>
                                        <div className='output-field__eye'>OS</div>
                                        <div className='output-field__entry'>{firstInputText}</div>
                                    </div>
                                    {/* <div className='output-field__item'>
                                        <div className='output-field__eye'>OU</div>
                                        <div className='output-field__entry'>{secondInputText}</div>
                                    </div>
                                    <div className='output-field__item'>
                                        <div className='output-field__eye'>OD</div>
                                        <div className='output-field__entry'>{thirdInputText}</div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='output__labels'>
                        {index === 1
                            ? historyData?.map((historyField, index) => {
                                return (
                                    <div
                                        key={`${historyField}_${index}`}
                                    >
                                        <div className='output__row-label'>{labelsData[index].label}</div>
                                        <>
                                            {historyField.first !== undefined && <div style={{ fontSize: '12px', lineHeight: '100%' }}>{historyField.first}</div>}
                                            {historyField.second !== undefined && <div style={{ fontSize: '12px', lineHeight: '100%' }}>{historyField.second}</div>}
                                            {historyField.third !== undefined && <div style={{ fontSize: '12px', lineHeight: '100%' }}>{historyField.third}</div>}
                                        </>
                                    </div>
                                )
                            })
                            : index === 2
                                ? statusData?.map((statusField, index) => {
                                    return (
                                        <div
                                            key={`${statusField}_${index}`}
                                        >
                                            <div className='output__row-label'>{labelsData[index].label}</div>
                                            <>
                                                {statusField.first !== undefined && <div style={{ fontSize: '12px', lineHeight: '100%' }}>{statusField.first}</div>}
                                                {statusField.second !== undefined && <div style={{ fontSize: '12px', lineHeight: '100%' }}>{statusField.second}</div>}
                                                {statusField.third !== undefined && <div style={{ fontSize: '12px', lineHeight: '100%' }}>{statusField.third}</div>}
                                            </>
                                        </div>
                                    )
                                })
                                : index === 3
                                    ? diagnosisData?.map((diagnosisField, index) => {
                                        return (
                                            <div
                                                key={`${diagnosisField}_${index}`}
                                            >
                                                <div className='output__row-label'>{labelsData[index].label}</div>
                                                <>
                                                    {diagnosisField.first !== undefined && <div style={{ fontSize: '12px', lineHeight: '100%' }}>{diagnosisField.first}</div>}
                                                    {diagnosisField.second !== undefined && <div style={{ fontSize: '12px', lineHeight: '100%' }}>{diagnosisField.second}</div>}
                                                    {diagnosisField.third !== undefined && <div style={{ fontSize: '12px', lineHeight: '100%' }}>{diagnosisField.third}</div>}
                                                </>
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
