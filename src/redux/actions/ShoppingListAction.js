export const add = (item) => {
    return {
        type: 'ADD_ITEM',
        payload: item
    }
}

export const remove = (id) => {
    return {
        type: 'REMOVE_ITEM',
        id: id
    }
}

export const edit = (item) => {
    return {
        type: 'EDIT_ITEM',
        payload: item
    }
}