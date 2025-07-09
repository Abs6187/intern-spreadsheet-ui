
import { Plus } from 'lucide-react';
import { Button } from './ui/button';

interface ViewTabsProps {
  views: string[];
  activeView: string;
  onViewSelect: (view: string) => void;
}

export const ViewTabs: React.FC<ViewTabsProps> = ({
  views,
  activeView,
  onViewSelect,
}) => {
  return (
    <div className="border-t bg-background px-6 py-2">
      <div className="flex items-center gap-1">
        {views.map((view) => (
          <Button
            key={view}
            variant={activeView === view ? "secondary" : "ghost"}
            size="sm"
            onClick={() => onViewSelect(view)}
            className="h-8"
          >
            {view}
          </Button>
        ))}
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
