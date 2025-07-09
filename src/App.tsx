
import { useState } from 'react';
import { DataGrid } from './components/DataGrid';
import { TabBar } from './components/TabBar';
import { Toolbar } from './components/Toolbar';
import { ViewTabs } from './components/ViewTabs';
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

  const [activeView, setActiveView] = useState('All Orders');
  const views = ['All Orders', 'Pending', 'Reviewed', 'Arrived'];

  return (
    <div className="h-screen flex flex-col bg-background">
      <header className="bg-background border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded"></div>
              <span className="text-sm text-muted-foreground">Workspace</span>
              <span className="text-sm text-muted-foreground">></span>
              <span className="text-sm text-muted-foreground">Folder 2</span>
              <span className="text-sm text-muted-foreground">></span>
              <span className="text-sm font-medium">Spreadsheet 3</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">John Doe</span>
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
          </div>
        </div>
      </header>
      
      <Toolbar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <DataGrid
          rows={activeSheet?.rows || []}
          editingCell={editingCell}
          onCellEdit={startEdit}
          onCellSave={saveEdit}
          onCancelEdit={cancelEdit}
          onAddRow={addRow}
        />
        
        <ViewTabs
          views={views}
          activeView={activeView}
          onViewSelect={setActiveView}
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
