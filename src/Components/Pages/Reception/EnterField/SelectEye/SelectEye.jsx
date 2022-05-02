import React from 'react'
import './selecteye.scss'

const SelectEye = ({ setVisible, getSelectedEye, eyeOfIndex }) => {

    const [eye, setEye] = React.useState(eyeOfIndex)

    return (
        <div
            onClick={() => (setVisible(false), setEye(eye), getSelectedEye(eye))}
            className='visible-field'
        >
            {eye}
        </div>
    )
}
export default SelectEye
