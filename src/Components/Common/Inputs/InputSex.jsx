import React from 'react'

const InputSex = ({ label }) => {
    return (
        <div className='patient-filter__number' style={{ marginLeft: '-45px' }}>
            <label className='patient-filter__label'>{label}</label>
            <div className='filter-sex' style={{ marginRight: '10px' }}>
                <input type='checkbox' style={{ border: '2px solid var(--back-of-elements)', borderRadius: '2px', width: '17px', height: '17px', background: 'var(--accent-no-contrast)' }} value='М' />
                <div className='filter-sex__option'>М</div>
            </div>
            <div className='filter-sex'>
                <input type='checkbox' style={{ border: '2px solid var(--back-of-elements)', borderRadius: '2px', width: '17px', height: '17px', background: 'var(--accent-no-contrast)' }} value='Ж' />
                <div className='filter-sex__option'>Ж</div>
            </div>
        </div>
    )
}

export default InputSex
