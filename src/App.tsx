
import { DataGrid } from './components/DataGrid';
import { TabBar } from './components/TabBar';
import { useSpreadsheet } from './hooks/useSpreadsheet';

function App() {
  const {
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
  } = useSpreadsheet();

  return (
    <div className="h-screen flex flex-col">
      <header className="bg-slate-800 text-white px-6 py-4">
        <h1 className="text-xl font-semibold">Intern Spreadsheet</h1>
      </header>
      
      <div className="flex-1 flex flex-col">
        <DataGrid
          rows={activeSheet?.rows || []}
          editingCell={editingCell}
          onCellEdit={startEdit}
          onCellSave={saveEdit}
          onCancelEdit={cancelEdit}
          onAddRow={addRow}
        />
        
        <TabBar
          sheets={sheets}
          activeSheetId={activeSheetId}
          onSheetSelect={setActiveSheetId}
          onAddSheet={addSheet}
        />
      </div>
    </div>
  );
}

export default App;
