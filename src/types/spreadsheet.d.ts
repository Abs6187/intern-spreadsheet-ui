
export interface Row {
  id: string;
  task: string;
  assignee: string;
  dueDate: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'Todo' | 'In Progress' | 'Completed';
}

export interface Sheet {
  id: string;
  name: string;
  rows: Row[];
}

export interface CellPosition {
  rowId: string;
  columnKey: keyof Row;
}
