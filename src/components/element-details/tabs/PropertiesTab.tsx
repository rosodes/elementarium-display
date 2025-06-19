
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useValidatedTranslation } from '../../../hooks/useValidatedTranslation';

interface PropertiesTabProps {
  element: Element;
  categoryColor: string;
}

const PropertiesTab: React.FC<PropertiesTabProps> = ({ element, categoryColor }) => {
  const { t } = useValidatedTranslation('PropertiesTab');

  return (
    <div className="properties-tab space-y-6">
      {/* Физические свойства */}
      <div className="properties-section">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
          {t('details.physicalProperties', 'Physical Properties')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {element.melt && (
            <div className="property-item bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm">
              <div className="property-label text-sm text-gray-600 dark:text-gray-400">
                {t('details.meltingPoint', 'Melting Point')}
              </div>
              <div className="property-value text-lg font-semibold text-gray-900 dark:text-white">
                {element.melt}°C
              </div>
            </div>
          )}
          
          {element.boil && (
            <div className="property-item bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm">
              <div className="property-label text-sm text-gray-600 dark:text-gray-400">
                {t('details.boilingPoint', 'Boiling Point')}
              </div>
              <div className="property-value text-lg font-semibold text-gray-900 dark:text-white">
                {element.boil}°C
              </div>
            </div>
          )}
          
          {element.density?.stp && (
            <div className="property-item bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm">
              <div className="property-label text-sm text-gray-600 dark:text-gray-400">
                {t('details.density', 'Density')}
              </div>
              <div className="property-value text-lg font-semibold text-gray-900 dark:text-white">
                {element.density.stp} g/cm³
              </div>
            </div>
          )}
          
          {element.radius?.covalent && (
            <div className="property-item bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm">
              <div className="property-label text-sm text-gray-600 dark:text-gray-400">
                {t('details.covalentRadius', 'Covalent Radius')}
              </div>
              <div className="property-value text-lg font-semibold text-gray-900 dark:text-white">
                {element.radius.covalent} pm
              </div>
            </div>
          )}
          
          {element.radius?.vanderwaals && (
            <div className="property-item bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm">
              <div className="property-label text-sm text-gray-600 dark:text-gray-400">
                {t('details.vanDerWaalsRadius', 'Van der Waals Radius')}
              </div>
              <div className="property-value text-lg font-semibold text-gray-900 dark:text-white">
                {element.radius.vanderwaals} pm
              </div>
            </div>
          )}
          
          {element.conductivity?.thermal && (
            <div className="property-item bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm">
              <div className="property-label text-sm text-gray-600 dark:text-gray-400">
                {t('details.thermalConductivity', 'Thermal Conductivity')}
              </div>
              <div className="property-value text-lg font-semibold text-gray-900 dark:text-white">
                {element.conductivity.thermal} W/m·K
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Химические свойства */}
      <div className="chemical-properties-section">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
          {t('details.chemicalProperties', 'Chemical Properties')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {element.electroneg && (
            <div className="property-item bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm">
              <div className="property-label text-sm text-gray-600 dark:text-gray-400">
                {t('details.electronegativity', 'Electronegativity')}
              </div>
              <div className="property-value text-lg font-semibold text-gray-900 dark:text-white">
                {element.electroneg}
              </div>
            </div>
          )}
          
          {element.oxidation && (
            <div className="property-item bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm">
              <div className="property-label text-sm text-gray-600 dark:text-gray-400">
                {t('details.oxidationStates', 'Oxidation States')}
              </div>
              <div className="property-value text-lg font-semibold text-gray-900 dark:text-white">
                {element.oxidation}
              </div>
            </div>
          )}
          
          {element.valence && (
            <div className="property-item bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm">
              <div className="property-label text-sm text-gray-600 dark:text-gray-400">
                {t('details.valence', 'Valence')}
              </div>
              <div className="property-value text-lg font-semibold text-gray-900 dark:text-white">
                {element.valence}
              </div>
            </div>
          )}
          
          {element.affinity && (
            <div className="property-item bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm">
              <div className="property-label text-sm text-gray-600 dark:text-gray-400">
                {t('details.electronAffinity', 'Electron Affinity')}
              </div>
              <div className="property-value text-lg font-semibold text-gray-900 dark:text-white">
                {element.affinity} kJ/mol
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Энергии ионизации */}
      {element.ionize && Object.keys(element.ionize).length > 0 && (
        <div className="ionization-section">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            {t('details.ionizationEnergies', 'Ionization Energies')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {Object.entries(element.ionize).slice(0, 8).map(([level, energy]) => (
              <div key={level} className="ionization-item bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {level}st Ionization
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  {energy} kJ/mol
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Термодинамические свойства */}
      {element.heat && (
        <div className="thermodynamic-section">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            {t('details.thermodynamicProperties', 'Thermodynamic Properties')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {element.heat.specific && (
              <div className="property-item bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm">
                <div className="property-label text-sm text-gray-600 dark:text-gray-400">
                  {t('details.specificHeat', 'Specific Heat')}
                </div>
                <div className="property-value text-lg font-semibold text-gray-900 dark:text-white">
                  {element.heat.specific} J/g·K
                </div>
              </div>
            )}
            
            {element.heat.fusion && (
              <div className="property-item bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm">
                <div className="property-label text-sm text-gray-600 dark:text-gray-400">
                  {t('details.heatOfFusion', 'Heat of Fusion')}
                </div>
                <div className="property-value text-lg font-semibold text-gray-900 dark:text-white">
                  {element.heat.fusion} kJ/mol
                </div>
              </div>
            )}
            
            {element.heat.vaporization && (
              <div className="property-item bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm">
                <div className="property-label text-sm text-gray-600 dark:text-gray-400">
                  {t('details.heatOfVaporization', 'Heat of Vaporization')}
                </div>
                <div className="property-value text-lg font-semibold text-gray-900 dark:text-white">
                  {element.heat.vaporization} kJ/mol
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertiesTab;
