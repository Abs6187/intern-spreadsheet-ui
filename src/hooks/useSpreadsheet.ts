
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Row, Sheet, CellPosition } from '../types/spreadsheet';

export const useSpreadsheet = () => {
  const [sheets, setSheets] = useState<Sheet[]>([
    {
      id: nanoid(),
      name: 'All Orders',
      rows: [
        {
          id: nanoid(),
          jobRequest: 'Launch social media campaign for product launch',
          submitted: '15-11-2024',
          status: 'In-process',
          submitter: 'Aisha Patel',
          url: 'www.aishapatel.com',
          assigned: 'Sophie Choudhury',
          priority: 'Medium',
          dueDate: '20-11-2024',
          estValue: '6,200,000',
        },
        {
          id: nanoid(),
          jobRequest: 'Update press kit for company redesign',
          submitted: '28-10-2024',
          status: 'Need to start',
          submitter: 'Irfan Khan',
          url: 'www.irfankhan.com',
          assigned: 'Tejas Pandey',
          priority: 'High',
          dueDate: '30-10-2024',
          estValue: '3,500,000',
        },
        {
          id: nanoid(),
          jobRequest: 'Finalize user testing feedback for application',
          submitted: '05-12-2024',
          status: 'In-process',
          submitter: 'Mark Johnson',
          url: 'www.markjohnson.dev',
          assigned: 'Rachel Lee',
          priority: 'Medium',
          dueDate: '10-12-2024',
          estValue: '4,750,000',
        },
        {
          id: nanoid(),
          jobRequest: 'Design financial report for Q4',
          submitted: '10-01-2025',
          status: 'Complete',
          submitter: 'Emily Green',
          url: 'www.emilygreen.finance',
          assigned: 'Tom Wright',
          priority: 'Low',
          dueDate: '15-01-2025',
          estValue: '5,900,000',
        },
        {
          id: nanoid(),
          jobRequest: 'Prepare financial report for Q4',
          submitted: '25-01-2025',
          status: 'Blocked',
          submitter: 'Jessica Brown',
          url: 'www.jessicabrown.reports',
          assigned: 'Kevin Smith',
          priority: 'Low',
          dueDate: '30-01-2025',
          estValue: '2,800,000',
        },
      ],
    },
  ]);

  const [activeSheetId, setActiveSheetId] = useState<string>(sheets[0].id);
  const [editingCell, setEditingCell] = useState<CellPosition | null>(null);

  const activeSheet = sheets.find(sheet => sheet.id === activeSheetId);

  const addSheet = () => {
    const newSheet: Sheet = {
      id: nanoid(),
      name: `Sheet ${sheets.length + 1}`,
      rows: [],
    };
    setSheets(prev => [...prev, newSheet]);
    setActiveSheetId(newSheet.id);
  };

  const addRow = () => {
    if (!activeSheet) return;
    
    const newRow: Row = {
      id: nanoid(),
      jobRequest: '',
      submitted: new Date().toLocaleDateString('en-GB'),
      status: 'Need to start',
      submitter: '',
      url: '',
      assigned: '',
      priority: 'Low',
      dueDate: '',
      estValue: '',
    };

    setSheets(prev =>
      prev.map(sheet =>
        sheet.id === activeSheetId
          ? { ...sheet, rows: [...sheet.rows, newRow] }
          : sheet
      )
    );
  };

  const updateCell = (rowId: string, columnKey: keyof Row, value: string) => {
    setSheets(prev =>
      prev.map(sheet =>
        sheet.id === activeSheetId
          ? {
              ...sheet,
              rows: sheet.rows.map(row =>
                row.id === rowId ? { ...row, [columnKey]: value } : row
              ),
            }
          : sheet
      )
    );
  };

  const startEdit = (rowId: string, columnKey: keyof Row) => {
    setEditingCell({ rowId, columnKey });
  };

  const saveEdit = (rowId: string, columnKey: keyof Row, value: string) => {
    updateCell(rowId, columnKey, value);
    setEditingCell(null);
  };

  const cancelEdit = () => {
    setEditingCell(null);
  };

  return {
    sheets,
    activeSheetId,
    activeSheet,
    editingCell,
    addSheet,
    addRow,
    startEdit,
    saveEdit,
    cancelEdit,
    setActiveSheetId,
  };
};
