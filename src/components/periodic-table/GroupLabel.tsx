
import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

interface GroupLabelProps {
  number: number;
}

const GroupLabel: React.FC<GroupLabelProps> = ({ number }) => {
  const { t } = useTranslation();
  
  return (
    <div className="group-label">
      <span className="group-label__number">{number}</span>
      <span className="group-label__text sr-only">
        {t('ui.group')} {number}
      </span>
    </div>
  );
};

export default React.memo(GroupLabel);
