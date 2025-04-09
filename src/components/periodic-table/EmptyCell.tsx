
import React from 'react';

interface EmptyCellProps {
  key: string;
}

const EmptyCell = ({ key }: EmptyCellProps) => {
  return <div key={key} className="element-placeholder w-[70px] h-[70px] flex-shrink-0"></div>;
};

export default EmptyCell;
