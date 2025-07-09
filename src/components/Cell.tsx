
import { useState, useEffect, useRef } from 'react';
import { Row } from '../types/spreadsheet';
import { Tag } from './Tag';

interface CellProps {
  value: string;
  rowId: string;
  columnKey: keyof Row;
  isEditing: boolean;
  onEdit: (rowId: string, columnKey: keyof Row) => void;
  onSave: (rowId: string, columnKey: keyof Row, value: string) => void;
  onCancel: () => void;
}

export const Cell: React.FC<CellProps> = ({
  value,
  rowId,
  columnKey,
  isEditing,
  onEdit,
  onSave,
  onCancel,
}) => {
  const [inputValue, setInputValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleDoubleClick = () => {
    if (!isEditing) {
      onEdit(rowId, columnKey);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSave(rowId, columnKey, inputValue);
    } else if (e.key === 'Escape') {
      onCancel();
    }
  };

  const handleBlur = () => {
    onSave(rowId, columnKey, inputValue);
  };

  const renderCellContent = () => {
    if (columnKey === 'priority') {
      return <Tag value={value} type="priority" />;
    }
    if (columnKey === 'status') {
      return <Tag value={value} type="status" />;
    }
    if (columnKey === 'url' && value) {
      return (
        <a 
          href={value} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline truncate"
          onClick={(e) => e.stopPropagation()}
        >
          {value}
        </a>
      );
    }
    return <span className="truncate">{value}</span>;
  };

  if (isEditing) {
    return (
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        className="w-full h-full px-3 py-2 border-2 border-blue-500 outline-none bg-white rounded"
      />
    );
  }

  return (
    <div
      className="w-full h-full px-3 py-2 cursor-pointer hover:bg-muted/50 flex items-center"
      onDoubleClick={handleDoubleClick}
    >
      {renderCellContent()}
    </div>
  );
};
