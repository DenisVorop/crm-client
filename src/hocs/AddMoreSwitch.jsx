import MoreContainer from '../Components/Pages/Reception/EnterField/MoreContainer/MoreContainer'

const AddMoreSwitch = ({ label, title, index, visibleObj, setVisibleObj, valueObj, setValueObj, nextVisibleObj }) => {

    let visible
    let value
    let setVisible = function () { }
    let nextVisible = function () { }
    let setValue = function () { }

    switch (label.label) {
        case 'Аллергологический анамнез': {
            visible = visibleObj.allergyVisible
            // setVisible = setAlergyVisible
            nextVisible = nextVisibleObj.setPharmacologyVisible
            setValue = setValueObj.setAlergy
            value = valueObj.allergy
            break
        }
        case 'Фармакологический анамнез': {
            visible = visibleObj.pharmacologyVisible
            setVisible = setVisibleObj.setPharmacologyVisible
            nextVisible = nextVisibleObj.setOperationsVisible
            setValue = setValueObj.setPharmacology
            value = valueObj.pharmacology
            break
        }
        case 'Операции на глаза': {
            visible = visibleObj.operationsVisible
            setVisible = setVisibleObj.setOperationsVisible
            setValue = setValueObj.setOperations
            value = valueObj.operations
            break
        }
        case 'Придаточный аппарат глаза': {
            visible = visibleObj.adnexaVisible
            nextVisible = nextVisibleObj.setCorneaVisible
            // setVisible =
            setValue = setValueObj.setAdnexa
            value = valueObj.adnexa
            break
        }
        case 'Роговица': {
            visible = visibleObj.corneaVisible
            setVisible = setVisibleObj.setCorneaVisible
            nextVisible = nextVisibleObj.setFrontVisible
            setValue = setValueObj.setCornea
            value = valueObj.cornea
            break
        }
        case 'Передняя камера': {
            visible = visibleObj.frontVisible
            setVisible = setVisibleObj.setFrontVisible
            nextVisible = nextVisibleObj.setIrisVisible
            setValue = setValueObj.setFront
            value = valueObj.front
            break
        }
        case 'Радужка': {
            visible = visibleObj.irisVisible
            setVisible = setVisibleObj.setIrisVisible
            nextVisible = nextVisibleObj.setLensVisible
            setValue = setValueObj.setIris
            value = valueObj.iris
            break
        }
        case 'Хрусталик': {
            visible = visibleObj.lensVisible
            setVisible = setVisibleObj.setLensVisible
            nextVisible = nextVisibleObj.setVitreousVisible
            setValue = setValueObj.setLens
            value = valueObj.lens
            break
        }
        case 'Стекловидное тело': {
            visible = visibleObj.vitreousVisible
            setVisible = setVisibleObj.setVitreousVisible
            nextVisible = nextVisibleObj.setDznVisible
            setValue = setValueObj.setVitreous
            value = valueObj.vitreous
            break
        }
        case 'ДЗН': {
            visible = visibleObj.dznVisible
            setVisible = setVisibleObj.setDznVisible
            nextVisible = nextVisibleObj.setPosteriorVisible
            setValue = setValueObj.setDzn
            value = valueObj.dzn
            break
        }
        case 'Задний отрезок глаза': {
            visible = visibleObj.posteriorVisible
            setVisible = setVisibleObj.setPosteriorVisible
            // nextVisible =
            setValue = setValueObj.setPosterior
            value = valueObj.posterior
            break
        }
        case 'Основной диагноз': {
            visible = visibleObj.mainDiagnosisVisible
            setVisible = setVisibleObj.setMainDiagnosisVisible
            nextVisible = nextVisibleObj.setConcomitantProfileDiagnosisVisible
            setValue = setValueObj.setMainDiagnosis
            value = valueObj.mainDiagnosis
            break
        }
        case 'Сопутствующий профильный диагноз': {
            visible = visibleObj.concomitantProfileDiagnosisVisible
            setVisible = setVisibleObj.setConcomitantProfileDiagnosisVisible
            nextVisible = nextVisibleObj.setAssociatedMedicalDiagnosisVisible
            setValue = setValueObj.setConcomitantProfileDiagnosis
            value = valueObj.concomitantProfileDiagnosis
            break
        }
        case 'Сопутствующий соматический диагноз': {
            visible = visibleObj.associatedMedicalDiagnosisVisible
            setVisible = setVisibleObj.setAssociatedMedicalDiagnosisVisible
            nextVisible = nextVisibleObj.setVisometryIOPVisible
            setValue = setValueObj.setAssociatedMedicalDiagnosis
            value = valueObj.associatedMedicalDiagnosis
            break
        }
        case 'Визометрия + ВГД': {
            visible = visibleObj.visometryIOPVisible
            setVisible = setVisibleObj.setVisometryIOPVisible
            nextVisible = nextVisibleObj.setVisometryInCycloplegiaVisible
            setValue = setValueObj.setVisometryIOP
            value = valueObj.visometryIOP
            break
        }
        case 'Визометрия при циклоплегии': {
            visible = visibleObj.visometryInCycloplegiaVisible
            setVisible = setVisibleObj.setVisometryInCycloplegiaVisible
            // nextVisible =
            setValue = setValueObj.setVisometryInCycloplegia
            value = valueObj.visometryInCycloplegia
            break
        }
        case 'Пахиметрическая карта': {
            visible = visibleObj.pachymetricMapVisible
            setVisible = setVisibleObj.setPachymetricMapVisible
            // nextVisible =
            setValue = setValueObj.setPachymetricMap
            value = valueObj.pachymetricMap
            break
        }
        case 'Авторефрактометрия': {
            visible = visibleObj.autorefractometryVisible
            setVisible = setVisibleObj.setAutorefractometryVisible
            // nextVisible =
            setValue = setValueObj.setAutorefractometry
            value = valueObj.autorefractometry
            break
        }
        default: {}
    }

    return <MoreContainer
        title={title}
        index={index}
        label={label}
        visible={visible}
        setVisible={setVisible}
        nextVisible={nextVisible}
        setValue={setValue}
        value={value}
    />
}

export default AddMoreSwitch
