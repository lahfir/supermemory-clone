export const ErrorIcon = ({ type }: { type: 'error' | 'warning' }) => {
  if (type === 'error') {
    return (
      <div className="w-2 h-2 flex-shrink-0">
        <svg width="100%" height="100%" viewBox="0 0 8 8" fill="none">
          <path d="M1.5 7.76705L0.724432 6.99148L6.82955 0.90625L7.60511 1.68182L1.5 7.76705ZM6.82955 7.76705L0.724432 1.68182L1.5 0.90625L7.60511 6.99148L6.82955 7.76705Z" fill="#FB2C36" />
        </svg>
      </div>
    );
  }

  return (
    <div className="w-3.5 h-3 flex-shrink-0">
      <svg width="100%" height="100%" viewBox="0 0 14 13" fill="none">
        <path d="M0 12.5L7 0.5L14 12.5H0ZM7 11.1563C7.265 11.1563 7.49041 11.0625 7.67625 10.875C7.86554 10.684 7.96018 10.4549 7.96018 10.1875C7.96018 9.92014 7.86554 9.69271 7.67625 9.50521C7.49041 9.31424 7.265 9.21875 7 9.21875C6.73501 9.21875 6.50787 9.31424 6.31858 9.50521C6.13274 9.69271 6.03982 9.92014 6.03982 10.1875C6.03982 10.4549 6.13274 10.684 6.31858 10.875C6.50787 11.0625 6.73501 11.1563 7 11.1563ZM6.37021 8.04167H7.62979L7.72271 4.5H6.27729L6.37021 8.04167Z" fill="#FFB900" />
      </svg>
    </div>
  );
};