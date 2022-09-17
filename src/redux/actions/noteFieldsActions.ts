export const setNewNoteTitle = (name: string): Action => ({
    type: 'SET_NEW_NOTE_TITLE',
    payload: name
})

export const setNewNoteContent = (content: string): Action => ({
    type: 'SET_NEW_NOTE_TEXT',
    payload: content
})

export const setNotePreviewId = (id: number): Action => ({
    type: 'SET_NOTE_PREVIEW_ID',
    payload: id
})