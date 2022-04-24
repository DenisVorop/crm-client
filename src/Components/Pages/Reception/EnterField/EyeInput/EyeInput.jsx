
import React from 'react'

import SelectEye from '../SelectEye/SelectEye'


const EyeInput = ({ setCount, eyes, count, nextVisible }) => {

    const [visible, setVisible] = React.useState(false)
    const [selectedEye, setSelectedEye] = React.useState('OS')

    const getSelectedEye = (eye) => {
        setSelectedEye(eye)
    }

    return (
        <div className="row-reception__input">
            <div className="row-reception__body">
                <div className="row-reception__eye" onClick={() => setVisible(true)}>
                    {selectedEye}
                    {visible
                        ? <div className={visible ? 'find active' : 'find'} >
                            <div className="find__field" onClick={e => e.stopPropagation()} style={{ textAlign: 'center', margin: '10px 0px 0px -10px' }}>
                                {eyes.map((eye, index) => {
                                    return (
                                        <SelectEye
                                            key={`${eye}_${index}`}
                                            eyeOfIndex={eye}
                                            setVisible={setVisible}
                                            getSelectedEye={getSelectedEye}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                        : null
                    }
                </div>
                <input
                    type="text"
                    placeholder='Без особенностей'
                    onChange={() => nextVisible(true)}
                />
            </div>
            {/* <div className="row-reception__delete" onClick={() => setCount(count - 1)}>
                {count === 1
                    ? null
                    : <img src={del} alt="Delete" />
                }
            </div> */}
        </div>
    )
}

export default EyeInput
