
import React, { memo } from 'react';
import { Element as ElementType } from '../../data/elementTypes';
import {
  renderPeriod1,
  renderPeriod2,
  renderPeriod3,
  renderPeriod4,
  renderPeriod5,
  renderPeriod6,
  renderPeriod7,
} from './tableHelpers';

interface TablePeriodsProps {
  onElementClick: (element: ElementType) => void;
}

const TablePeriods = memo(({ onElementClick }: TablePeriodsProps) => {
  return (
    <>
      {renderPeriod1(onElementClick)}
      {renderPeriod2(onElementClick)}
      {renderPeriod3(onElementClick)}
      {renderPeriod4(onElementClick)}
      {renderPeriod5(onElementClick)}
      {renderPeriod6(onElementClick)}
      {renderPeriod7(onElementClick)}
    </>
  );
});

TablePeriods.displayName = 'TablePeriods';

export default TablePeriods;
