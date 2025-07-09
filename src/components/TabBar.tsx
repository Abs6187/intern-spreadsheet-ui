
import { PlusIcon } from '@heroicons/react/24/outline';
import { Sheet } from '../types/spreadsheet';

interface TabBarProps {
  sheets: Sheet[];
  activeSheetId: string;
  onSheetSelect: (sheetId: string) => void;
  onAddSheet: () => void;
}

export const TabBar: React.FC<TabBarProps> = ({
  sheets,
  activeSheetId,
  onSheetSelect,
  onAddSheet,
}) => {
  return (
    <div className="flex bg-gray-100 border-t border-gray-300">
      {sheets.map((sheet) => (
        <button
          key={sheet.id}
          onClick={() => onSheetSelect(sheet.id)}
          className={`px-4 py-2 text-sm font-medium border-r border-gray-300 ${
            sheet.id === activeSheetId
              ? 'bg-white text-gray-900 border-b-2 border-blue-500'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {sheet.name}
        </button>
      ))}
      <button
        onClick={onAddSheet}
        className="px-3 py-2 text-gray-700 hover:bg-gray-200 border-r border-gray-300"
      >
        <PlusIcon className="h-4 w-4" />
      </button>
    </div>
  );
};
