let nextTextId = 0

export const addText = text => ({
    type: 'ADD_TEXT',
    id: nextTextId++,
    text,
    hash: ''
})

export const toggleSave = id => ({
    type: 'TOGGLE_SAVE_ASYNC',
    id
})