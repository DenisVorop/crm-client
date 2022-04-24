import plus from '../../../../../../assets/img/plus.svg'

const AddMore = ({ label, setVisible }) => {
    return (
        <div
            className="row-reception__add-more"
            style={{ display: 'flex' }}
            onClick={() => setVisible(true)}
        >
            <img src={plus} alt="plus" />
            <p>{label}</p>
        </div>
    )
}

export default AddMore
