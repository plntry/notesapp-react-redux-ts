type AppState = {
  notesList: Array<any>;
  noteFields: {
    title: string;
    content: string;
    category: string;
  };
  notePreviewId: null | number;
  searchText: string;
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
}