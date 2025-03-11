
import React from 'react';

interface EmptyCellProps {
  keyId: string;
}

const EmptyCell = ({ keyId }: EmptyCellProps) => {
  return <div key={keyId} className="element-placeholder"></div>;
};

export default EmptyCell;
