
import { Cell } from './Cell';
import { Row, CellPosition } from '../types/spreadsheet';

interface DataGridProps {
  rows: Row[];
  editingCell: CellPosition | null;
  onCellEdit: (rowId: string, columnKey: keyof Row) => void;
  onCellSave: (rowId: string, columnKey: keyof Row, value: string) => void;
  onCancelEdit: () => void;
  onAddRow: () => void;
}

export const DataGrid: React.FC<DataGridProps> = ({
  rows,
  editingCell,
  onCellEdit,
  onCellSave,
  onCancelEdit,
  onAddRow,
}) => {
  const columns = [
    { key: 'task' as keyof Row, label: 'Task' },
    { key: 'assignee' as keyof Row, label: 'Assignee' },
    { key: 'dueDate' as keyof Row, label: 'Due Date' },
    { key: 'priority' as keyof Row, label: 'Priority' },
    { key: 'status' as keyof Row, label: 'Status' },
  ];

  return (
    <div className="flex-1 overflow-auto">
      <div className="min-w-full">
        <div className="grid grid-cols-[40px_1fr_1fr_1fr_1fr_1fr] bg-gray-50 border-b border-gray-300 sticky top-0 z-10">
          <div className="px-2 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-300">
            #
          </div>
          {columns.map((column) => (
            <div
              key={column.key}
              className="px-2 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-300"
            >
              {column.label}
            </div>
          ))}
        </div>
        
        {rows.map((row, index) => (
          <div
            key={row.id}
            className={`grid grid-cols-[40px_1fr_1fr_1fr_1fr_1fr] border-b border-gray-200 ${
              index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
            }`}
          >
            <div className="px-2 py-2 text-sm text-gray-500 border-r border-gray-200 flex items-center justify-center">
              {index + 1}
            </div>
            {columns.map((column) => (
              <div
                key={column.key}
                className="border-r border-gray-200 h-10 flex items-center"
              >
                <Cell
                  value={row[column.key]}
                  rowId={row.id}
                  columnKey={column.key}
                  isEditing={
                    editingCell?.rowId === row.id && editingCell?.columnKey === column.key
                  }
                  onEdit={onCellEdit}
                  onSave={onCellSave}
                  onCancel={onCancelEdit}
                />
              </div>
            ))}
          </div>
        ))}
        
        <div className="p-4">
          <button
            onClick={onAddRow}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <span>+ Add Row</span>
          </button>
        </div>
      </div>
    </div>
  );
};
