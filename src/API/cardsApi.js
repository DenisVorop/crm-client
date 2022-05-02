import { $authHost, $host } from "./_index";

export const createCard = async (card) => {
    console.log(card)
    const { data } = await $authHost.post('api/card/new-card', card)
    return data
}

export const fetchCards = async (page, limit) => {
    const { data } = await $host.get('api/card', {params: {
        page, limit
    }})
    console.log(data)
    return data
}

export const fetchOneCard = async (card_num) => {
    const { data } = await $host.get('api/card/' + card_num)
    return data
}
