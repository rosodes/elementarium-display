
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useValidatedTranslation } from '../../../hooks/useValidatedTranslation';

interface SafetyTabProps {
  element: Element;
}

const SafetyTab: React.FC<SafetyTabProps> = ({ element }) => {
  const { t } = useValidatedTranslation('SafetyTab');

  return (
    <div className="safety-tab space-y-6">
      {/* Опасности */}
      {element.safety?.hazards && element.safety.hazards.length > 0 && (
        <div className="hazards-section">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            {t('details.hazards', 'Hazards')}
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {element.safety.hazards.map((hazard, index) => (
              <div key={index} className="hazard-item bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-400 text-lg">⚠️</span>
                  <p className="text-red-800 dark:text-red-200 font-medium">{hazard}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Меры предосторожности */}
      {element.safety?.precautions && element.safety.precautions.length > 0 && (
        <div className="precautions-section">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            {t('details.precautions', 'Safety Precautions')}
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {element.safety.precautions.map((precaution, index) => (
              <div key={index} className="precaution-item bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 text-lg">🛡️</span>
                  <p className="text-blue-800 dark:text-blue-200 font-medium">{precaution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Обращение */}
      {element.safety?.handling && (
        <div className="handling-section">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            {t('details.handling', 'Handling Guidelines')}
          </h3>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <span className="text-yellow-600 dark:text-yellow-400 text-lg">🧤</span>
              <p className="text-yellow-800 dark:text-yellow-200">{element.safety.handling}</p>
            </div>
          </div>
        </div>
      )}

      {/* Токсичность */}
      {element.safety?.toxicity && (
        <div className="toxicity-section">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            {t('details.toxicity', 'Toxicity Information')}
          </h3>
          <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <span className="text-orange-600 dark:text-orange-400 text-lg">☠️</span>
              <p className="text-orange-800 dark:text-orange-200">{element.safety.toxicity}</p>
            </div>
          </div>
        </div>
      )}

      {/* Радиоактивные элементы */}
      {element.radioactive && (
        <div className="radiation-safety bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-red-600 dark:text-red-400 text-2xl">☢️</span>
            <h3 className="text-lg font-semibold text-red-800 dark:text-red-200">
              {t('details.radiationSafety', 'Radiation Safety')}
            </h3>
          </div>
          
          <div className="space-y-4">
            <div className="radiation-warning">
              <h4 className="font-medium text-red-800 dark:text-red-200 mb-2">
                {t('details.radiationHazards', 'Radiation Hazards')}:
              </h4>
              <ul className="space-y-1 text-sm text-red-700 dark:text-red-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                  {t('details.ionizingRadiation', 'Emits ionizing radiation')}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                  {t('details.internalContamination', 'Risk of internal contamination')}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                  {t('details.externalExposure', 'External radiation exposure hazard')}
                </li>
              </ul>
            </div>
            
            <div className="radiation-protection">
              <h4 className="font-medium text-red-800 dark:text-red-200 mb-2">
                {t('details.radiationProtection', 'Radiation Protection Measures')}:
              </h4>
              <ul className="space-y-1 text-sm text-red-700 dark:text-red-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                  {t('details.leadShielding', 'Lead shielding required')}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                  {t('details.remoteHandling', 'Remote handling equipment necessary')}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                  {t('details.continuousMonitoring', 'Continuous radiation monitoring')}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                  {t('details.specializedTraining', 'Specialized training required')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Первая помощь */}
      <div className="first-aid-section">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
          {t('details.firstAid', 'First Aid')}
        </h3>
        
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
          <div className="flex items-start gap-3">
            <span className="text-green-600 dark:text-green-400 text-lg">🚑</span>
            <div className="space-y-2">
              <p className="text-green-800 dark:text-green-200 font-medium">
                {t('details.emergencyResponse', 'Emergency Response')}:
              </p>
              <ul className="space-y-1 text-sm text-green-700 dark:text-green-300">
                <li>• {t('details.contactEmergencyServices', 'Contact emergency services immediately')}</li>
                <li>• {t('details.removeFromExposure', 'Remove person from source of exposure')}</li>
                <li>• {t('details.decontaminate', 'Decontaminate if necessary')}</li>
                <li>• {t('details.seekMedicalAttention', 'Seek immediate medical attention')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Если нет данных о безопасности */}
      {!element.safety && !element.radioactive && (
        <div className="no-safety-data bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center">
          <p className="text-gray-600 dark:text-gray-400">
            {t('details.noSafetyData', 'No specific safety data available for this element. Follow general laboratory safety procedures.')}
          </p>
        </div>
      )}
    </div>
  );
};

export default SafetyTab;
