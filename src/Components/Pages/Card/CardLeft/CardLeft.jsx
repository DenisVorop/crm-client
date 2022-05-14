const CardLeft = ({ label, text }) => {
    return (
        <>
            <div className='card__line'>
                <div className='card__label'>{label}</div>
                <div className='card__text'>{text}</div>
            </div>
        </>
    )
}

export default CardLeft
