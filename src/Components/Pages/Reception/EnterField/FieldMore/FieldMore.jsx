import Input from '../../../../../Common/Inputs/Input'

import del from '../../../../../../assets/img/del.svg'

import './fieldmore.scss'


const FieldMore = ({ label, deleteField }) => {
    const styleInput = {
        width: '489px',
        height: '34px',
        padding: '0px 0px 0px 10px',
    }

    return (
        <div className="field-more__body">
            <div className="field-more__label">{label}</div>
            <div className="field-more__items">
                <div className="field-more__item">Без особенностей</div>
                <div className="field-more__item">Не отягощен</div>
                <div className="field-more__item">Прозрачная</div>
            </div>
            <div className="field-more__input">
                <Input
                    placeholder='Без особенностей'
                    styleInput={styleInput}
                />
                <div
                    className="row-reception__delete"
                    onClick={() => deleteField(false)}
                >
                    <img src={del} alt="Delete" />
                </div>
            </div>
        </div>
    )
}

export default FieldMore
