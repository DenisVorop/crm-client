export const enterFields = [
    {
        label: 'Жалобы пациента', text: 'опишите, на что жалуется больной',
        addMore: [
            { label: '' }, { label: '' }, { label: '' },
        ],
    },
    {
        label: 'Анамнез пациента', text: 'краткая история заболевания',
        addMore: [
            { label: 'Аллергологический анамнез' }, { label: 'Фармакологический анамнез' }, { label: 'Операции на глаза' },
        ],
    },
    {
        label: 'Status ophtalmicus', text: 'состояние глаз пациента',
        addMore: [
            { label: 'Придаточный аппарат глаза' }, { label: 'Роговица' }, { label: 'Передняя камера' },
            { label: 'Радужка' }, { label: 'Хрусталик' }, { label: 'Стекловидное тело' },
            { label: 'ДЗН' }, { label: 'Задний отрезок глаза' },
        ],
    },
    {
        label: 'Диагноз', text: 'все диагнозы, которые нужно отразить в истории болезни, коды МКБ-10 добавятся автоматически',
        addMore: [
            { label: 'Основной диагноз' }, { label: 'Сопутствующий профильный диагноз' }, { label: 'Сопутствующий соматический диагноз' },
        ],
    },
    {
        label: 'Данные обследований', text: '',
        addMore: [
            { label: 'Визометрия + ВГД' }, { label: 'Визометрия при циклоплегии' },
            { label: 'Пахиметрическая карта' }, { label: 'Авторефрактометрия' },
        ],
    },
    // {
    //     label: 'Назначение до операции', text: 'препараты появятся в листе назначений до дня проведения операции'
    // },
    // {
    //     label: 'Назначение после выписки', text: 'препараты появятся в назначения выписсного эпикриза'
    // }
]
