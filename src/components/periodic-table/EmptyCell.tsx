
import React from 'react';

interface EmptyCellProps {
  keyId: string;
}

const EmptyCell = ({ keyId }: EmptyCellProps) => {
  return <div key={keyId} className="element-placeholder w-[70px] h-[70px] flex-shrink-0"></div>;
};

export default EmptyCell;
