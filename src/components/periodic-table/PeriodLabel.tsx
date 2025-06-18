
import React from 'react';
import { useValidatedTranslation } from '../../hooks/useValidatedTranslation';

interface PeriodLabelProps {
  number: number;
}

const PeriodLabel: React.FC<PeriodLabelProps> = ({ number }) => {
  const { t } = useValidatedTranslation('PeriodLabel');
  
  return (
    <div className="period-label">
      <span className="period-label__number">{number}</span>
      <span className="period-label__text sr-only">
        {t('ui.period', `Period ${number}`)} {number}
      </span>
    </div>
  );
};

export default React.memo(PeriodLabel);
