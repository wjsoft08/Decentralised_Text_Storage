let nextTextId = 0

export const addText = text => ({
    type: 'ADD_TEXT',
    id: nextTextId++,
    text,
    hash: ''
})

export const toggleSave = (id, hash) => ({
    type: 'TOGGLE_SAVE_ASYNC',
    id,
    hash
})