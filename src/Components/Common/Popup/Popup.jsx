import React from 'react'

import './popup.scss'

const Popup = ({ popupActive, setPopupActive, children, setPopupActiveIndex }) => {

    React.useEffect(() => {
        if (popupActive) {
            document.body.classList.add('body')
        }
        return () => {
            document.body.classList.remove('body')
        }
    }, [popupActive])

    return (
        <div
            className={popupActive ? 'popup active' : 'popup'}
            onClick={() => (setPopupActiveIndex(null), setPopupActive(false))}
        >
            <div
                className={popupActive ? 'popup__content active' : 'popup__content'}
                onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}

export default Popup
