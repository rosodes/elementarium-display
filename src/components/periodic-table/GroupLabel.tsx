
import React from 'react';
import { useValidatedTranslation } from '../../hooks/useValidatedTranslation';

interface GroupLabelProps {
  number: number;
}

const GroupLabel: React.FC<GroupLabelProps> = ({ number }) => {
  const { t } = useValidatedTranslation('GroupLabel');
  
  return (
    <div className="group-label">
      <span className="group-label__number">{number}</span>
      <span className="group-label__text sr-only">
        {t('ui.group', `Group ${number}`)} {number}
      </span>
    </div>
  );
};

export default React.memo(GroupLabel);
