const initialState: AppState = {
    notesActiveList: [],
    notesArchivedList: [],
    noteFields: {
        title: '',
        content: '',
        category: '',
    },
    notePreviewId: null,
     isEdit: false
}

function updateNoteFields(
    state: AppState,
    payload: Action['payload'],
    fieldName: string
) {
    return {
        ...state,
        noteFields: {
            ...state.noteFields,
            [fieldName]: payload
        }
    }
}

const resetNoteFields = () => ({ title: '', content: '', category: 'Task' });

export const reducer = (state:AppState = initialState, action:Action): AppState => {
    switch(action.type) {
        case 'SET_NEW_NOTE_TITLE':
            return updateNoteFields(state, action.payload, 'title');

        case 'SET_NEW_NOTE_TEXT':
            return updateNoteFields(state, action.payload, 'content');

        case 'SET_NEW_NOTE_CATEGORY':
            return updateNoteFields(state, action.payload, 'category');

        case 'ADD_NEW_NOTE':
            const { title, content, category } = action.payload;

            if (state.isEdit) {
                return {
                    ...state,
                    isEdit: false
                }
            } else {
                const newNote: Note = {
                    title,
                    content,
                    category,
                    id: Date.now(),
                    date: new Date(),
                    status: 'active'
                }
                
                return {
                    ...state,
                    notesActiveList: [newNote, ...state.notesActiveList],
                    noteFields: resetNoteFields()
                }
            }

        case 'SET_NOTE_PREVIEW_ID':
            return {
                ...state,
                notePreviewId: action.payload,
            }

        case 'FETCH_NOTES':
            return {
                ...state,
                notesActiveList: action.payload,
            }

        case 'REMOVE_NOTE':
            return {
                ...state,
                notePreviewId: null,
                notesActiveList: state.notesActiveList.filter(({ id }) => id !== action.payload),
            }

        case 'UPDATE_NOTE':
            const note = state.notesActiveList.find((n) => n.id === action.payload.id);
            const updatedNote = {
                ...note,
                title: action.payload.title,
                content: action.payload.content,
                category: action.payload.category,
                date: new Date(),
            }
            const noteIndex = state.notesActiveList.findIndex(
                (n) => n.id === action.payload.id
            )
            const updatedNotesList = [
                ...state.notesActiveList.slice(0, noteIndex),
                updatedNote,
                ...state.notesActiveList.slice(noteIndex + 1),
            ]
            return {
                ...state,
                notesActiveList: updatedNotesList,
                noteFields: resetNoteFields(),
                isEdit: false,
            }
        
        case 'ARCHIVE_NOTE':
            const noteToArchive = state.notesActiveList.find((n) => n.id === action.payload.id);
            const archivedNote = {
                ...noteToArchive,
                status: 'archived',
            }
            
            const archivedNoteIndex = state.notesActiveList.findIndex(
                (n) => n.id === action.payload.id
            )
            const updatedNotesActiveList = [
                ...state.notesActiveList.slice(0, archivedNoteIndex),
                ...state.notesActiveList.slice(archivedNoteIndex + 1),
            ]         
            return {
                ...state,
                notePreviewId: null,
                notesActiveList: updatedNotesActiveList,
                notesArchivedList: [archivedNote, ...state.notesArchivedList],
            }

        case 'IS_EDIT':
            return {
                ...state,
                isEdit: action.payload,
            }

        default:
            return state
    }
}