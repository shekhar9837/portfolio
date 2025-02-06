interface GridProps {
    children: React.ReactNode;
    cols: number;
    gap?: number;
  }
  
  const Grid: React.FC<GridProps> = ({ children, cols, gap = 6 }) => {
    return (
      <div className={` grid grid-cols-${cols} gap-${gap} `}>
        {children}
      </div>
    );
  };
  
  export default Grid;