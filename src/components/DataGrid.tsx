
import { Cell } from './Cell';
import { Row, CellPosition } from '../types/spreadsheet';
import { Plus } from 'lucide-react';
import { Button } from './ui/button';

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
    { key: 'jobRequest' as keyof Row, label: 'Job Request', width: '250px' },
    { key: 'submitted' as keyof Row, label: 'Submitted', width: '120px' },
    { key: 'status' as keyof Row, label: 'Status', width: '130px' },
    { key: 'submitter' as keyof Row, label: 'Submitter', width: '150px' },
    { key: 'url' as keyof Row, label: 'URL', width: '200px' },
    { key: 'assigned' as keyof Row, label: 'Assigned', width: '150px' },
    { key: 'priority' as keyof Row, label: 'Priority', width: '100px' },
    { key: 'dueDate' as keyof Row, label: 'Due Date', width: '120px' },
    { key: 'estValue' as keyof Row, label: 'Est. Value', width: '120px' },
  ];

  return (
    <div className="flex-1 overflow-auto bg-background">
      <div className="min-w-fit">
        {/* Header */}
        <div className="sticky top-0 z-10 border-b bg-muted/50">
          <div className="flex">
            <div className="w-12 px-3 py-3 text-xs font-medium text-muted-foreground border-r">
              #
            </div>
            {columns.map((column) => (
              <div
                key={column.key}
                className="px-3 py-3 text-xs font-medium text-muted-foreground border-r"
                style={{ width: column.width, minWidth: column.width }}
              >
                {column.label}
              </div>
            ))}
          </div>
        </div>
        
        {/* Rows */}
        {rows.map((row, index) => (
          <div
            key={row.id}
            className="flex border-b hover:bg-muted/50"
          >
            <div className="w-12 px-3 py-3 text-sm text-muted-foreground border-r flex items-center justify-center bg-muted/30">
              {index + 1}
            </div>
            {columns.map((column) => (
              <div
                key={column.key}
                className="border-r flex items-center min-h-[48px]"
                style={{ width: column.width, minWidth: column.width }}
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
        
        {/* Add Row Button */}
        <div className="p-4">
          <Button
            onClick={onAddRow}
            variant="ghost"
            className="gap-2 text-muted-foreground hover:text-foreground"
          >
            <Plus className="h-4 w-4" />
            Add Row
          </Button>
        </div>
      </div>
    </div>
  );
};
