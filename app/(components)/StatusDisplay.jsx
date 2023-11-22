const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    let color = 'bg-slate-400';
    switch (status.toString().toLowerCase()) {
      case 'done':
        color = 'bg-green-200';
        return color;
      case 'working':
        color = 'bg-yellow-200';
        return color;
      case 'not started':
        color = 'bg-red-200';
        return color;
      case 'pending':
        color = 'bg-indigo-200';
        return color;
      case 'review':
        color = 'bg-pink-300';
        return color;
      case 'open':
        color = 'bg-red-400';
        return color;
    }
    return color;
  };

  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
