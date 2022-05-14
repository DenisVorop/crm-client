import React from 'react'

import FieldMore from './FieldMore/FieldMore'
import Survey from './Survey/Survey'


const MoreContainer = ({ visible, setVisible, label, nextVisible, title, setValue, index, value }) => {
    return (
        <>
            {visible && title !== 'Данные обследований'
                ? <FieldMore
                    deleteField={setVisible}
                    label={label.label}
                    nextVisible={nextVisible}
                    title={title}
                    setValue={setValue}
                    index={index}
                    value={value}
                />
                : title === 'Данные обследований'
                    ?
                    <Survey
                        visible={visible}
                        setVisible={setVisible}
                        label={label.label}
                    />
                    : null
            }
        </>
    )
}

export default MoreContainer
