export const addNewNote = (fields: {}): Action => ({
    type: 'ADD_NEW_NOTE',
    payload: fields
})

export const removeNote = (id: number): Action => ({
    type: 'REMOVE_NOTE',
    payload: id
})

export const fetchNotes = (notes: any): Action => ({
    type: 'FETCH_NOTES',
    payload: notes
})

export const updateNote = (note: INote): Action => ({
    type: 'UPDATE_NOTE',
    payload: note
})

export const archiveNote = (note: INote): Action => ({
    type: 'ARCHIVE_NOTE',
    payload: note
})

export const unarchiveNote = (note: INote): Action => ({
    type: 'UNARCHIVE_NOTE',
    payload: note
})

export const setEditStatus = (isEdit: boolean): Action => ({
    type: 'IS_EDIT',
    payload: isEdit
})