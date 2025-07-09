
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Row, Sheet, CellPosition } from '../types/spreadsheet';

export const useSpreadsheet = () => {
  const [sheets, setSheets] = useState<Sheet[]>([
    {
      id: nanoid(),
      name: 'Sheet 1',
      rows: [
        {
          id: nanoid(),
          task: 'Setup development environment',
          assignee: 'John Doe',
          dueDate: '2024-01-15',
          priority: 'High',
          status: 'In Progress',
        },
        {
          id: nanoid(),
          task: 'Design mockups',
          assignee: 'Jane Smith',
          dueDate: '2024-01-20',
          priority: 'Medium',
          status: 'Todo',
        },
        {
          id: nanoid(),
          task: 'Write documentation',
          assignee: 'Bob Johnson',
          dueDate: '2024-01-10',
          priority: 'Low',
          status: 'Completed',
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
      task: '',
      assignee: '',
      dueDate: '',
      priority: 'Low',
      status: 'Todo',
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
