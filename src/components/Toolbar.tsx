
import { Search, Filter, Eye, Upload, Download, Share, Plus } from 'lucide-react';
import { Button } from './ui/button';

export const Toolbar = () => {
  return (
    <div className="border-b bg-background px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Tool bar</span>
            <Button variant="ghost" size="sm">
              <span className="text-xs">⌄</span>
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="gap-2">
              <span className="text-xs">👁</span>
              Hide fields
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <span className="text-xs">↕</span>
              Sort
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Eye className="h-4 w-4" />
              Cell view
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search within sheet"
              className="w-64 rounded-md border border-input bg-background px-9 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <Button variant="ghost" size="sm" className="gap-2">
            <Upload className="h-4 w-4" />
            Import
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <Share className="h-4 w-4" />
            Share
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Action
          </Button>
        </div>
      </div>
    </div>
  );
};
