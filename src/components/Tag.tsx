
import { getPriorityColor, getStatusColor } from '../utils/color';

interface TagProps {
  value: string;
  type: 'priority' | 'status';
}

export const Tag: React.FC<TagProps> = ({ value, type }) => {
  const colorClass = type === 'priority' ? getPriorityColor(value) : getStatusColor(value);
  
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${colorClass}`}>
      {value}
    </span>
  );
};
