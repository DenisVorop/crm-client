import CardLeft from '../Components/Pages/Card/CardLeft/CardLeft'

const CardLeftSwitch = ({ label, card }) => {

    let text

    switch (label) {
        case 'Фамилия': {
            text = card.last_name
            break
        }
        case 'Имя': {
            text = card.first_name
            break
        }
        case 'Отчество': {
            text = card.patronymic
            break
        }
        case 'Пол': {
            text = card.sex
            break
        }
        case 'День рождения': {
            text = card.birth
            break
        }
        case 'Семейное положение': {
            text = card.marital_status
            break
        }
        case 'Адрес прописки': {
            text = card.reg_addres
            break
        }
        case 'Адрес проживания': {
            text = card.fact_addres
            break
        }
        case 'Телефон': {
            text = card.phone
            break
        }
        case 'Дата первого посещения': {
            text = card.first_record
            break
        }
        case 'Дата последнего посещения': {
            text = card.last_record
            break
        }
        default: { }
    }

    return <CardLeft
        label={label}
        text={text}
    />
}

export default CardLeftSwitch
