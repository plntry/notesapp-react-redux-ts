type AppState = {
  notesActiveList: Array<any>;
  notesArchivedList: Array<any>;
  noteFields: {
    title: string;
    content: string;
    category: string;
  };
  notePreviewId: null | number;
  isEdit: boolean;
}

type Action = {
  type: string;
  payload?: any;
}
  
type Note = {
  id: number;
  title: string;
  date: Date;
  content: string;
  category: string;
  status: string;
}