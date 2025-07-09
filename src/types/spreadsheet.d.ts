
export interface Row {
  id: string;
  jobRequest: string;
  submitted: string;
  status: 'In-process' | 'Need to start' | 'Complete' | 'Blocked';
  submitter: string;
  url: string;
  assigned: string;
  priority: 'Low' | 'Medium' | 'High';
  dueDate: string;
  estValue: string;
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
