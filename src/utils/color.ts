
export const getPriorityColor = (priority: string): string => {
  switch (priority) {
    case 'Low':
      return 'bg-blue-100 text-blue-800';
    case 'Medium':
      return 'bg-yellow-100 text-yellow-800';
    case 'High':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const getStatusColor = (status: string): string => {
  switch (status) {
    case 'Need to start':
      return 'bg-gray-100 text-gray-800';
    case 'In-process':
      return 'bg-yellow-100 text-yellow-800';
    case 'Complete':
      return 'bg-green-100 text-green-800';
    case 'Blocked':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};
