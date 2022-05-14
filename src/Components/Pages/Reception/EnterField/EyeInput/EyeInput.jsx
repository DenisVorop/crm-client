
import React from 'react'

import SelectEye from '../SelectEye/SelectEye'


const EyeInput = ({ eyes, nextVisible, setValue, index, value }) => {

    const [visible, setVisible] = React.useState(false)
    const [selectedEye, setSelectedEye] = React.useState('OS')

    const getSelectedEye = React.useCallback((eye) => {
        setSelectedEye(eye)
    }, [selectedEye])

    return (
        <div className='row-reception__input'>
            <div className='row-reception__body'>
                <div className='row-reception__eye' onClick={() => setVisible(true)} style={{ cursor: 'pointer' }}>
                    {selectedEye}
                    {visible
                        ? <div className={visible ? 'find active' : 'find'} >
                            <div className='find__field' onClick={(e) => (e.stopPropagation())} style={{ textAlign: 'center', margin: '10px 0px 0px -10px' }}>
                                {eyes.map((eye, index) => {
                                    return <SelectEye
                                        key={`${eye}_${index}`}
                                        eyeOfIndex={eye}
                                        setVisible={setVisible}
                                        getSelectedEye={getSelectedEye}
                                    />
                                })}
                            </div>
                        </div>
                        : null
                    }
                </div>
                <input
                    type='text'
                    placeholder='Без особенностей'
                    id={index}
                    onChange={
                        (e) => (
                            nextVisible(true),
                            e.target.id === '0'
                                ? setValue({ first: e.target.value, second: value.second, third: value.third })
                                : e.target.id === '1' ? setValue({ first: value.first, second: e.target.value, third: value.third })
                                    : setValue({ first: value.first, second: value.second, third: e.target.value })
                        )
                    }
                />
            </div>
        </div>
    )
}

export default EyeInput
