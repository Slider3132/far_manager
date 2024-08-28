export const Divider = ({ className }: { className?: string }) => {
  return (
    <div className={`flex-divider bg-light-cyan ${className || ''}`}></div>
  );
};
