import React from 'react'

const EmptySearch = () => {
    return (
        <div className="records__row">
            <div className="records__person">
                <div className="records__column" style={{ color: 'var(--secondary-basic)' }}>Не найдено</div>
            </div>
        </div>
    )
}

export default EmptySearch
