import React from 'react'


const SelectEye = ({ setVisible, getSelectedEye, eyeOfIndex }) => {

    const [eye, setEye] = React.useState(eyeOfIndex)

    return (
        <div
            style={{ cursor: 'pointer'}}
            onClick={() => (setVisible(false), setEye(eye), getSelectedEye(eye))}
            className='visible-field'
        >
            {eye}
        </div>
    )
}
export default SelectEye
