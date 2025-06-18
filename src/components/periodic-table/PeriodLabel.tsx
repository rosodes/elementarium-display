
import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

interface PeriodLabelProps {
  number: number;
}

const PeriodLabel: React.FC<PeriodLabelProps> = ({ number }) => {
  const { t } = useTranslation();
  
  return (
    <div className="period-label">
      <span className="period-label__number">{number}</span>
      <span className="period-label__text sr-only">
        {t('ui.period')} {number}
      </span>
    </div>
  );
};

export default React.memo(PeriodLabel);
