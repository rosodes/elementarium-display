import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useValidatedTranslation } from '../../../hooks/useValidatedTranslation';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';

interface ElementPhysicalPropertiesProps {
  element: Element;
}

const ElementPhysicalProperties: React.FC<ElementPhysicalPropertiesProps> = ({ element }) => {
  const { t } = useValidatedTranslation('ElementPhysicalProperties');

  const formatTemperature = (temp: string | undefined) => {
    if (!temp) return 'N/A';
    return `${temp} K`;
  };

  const formatRadius = (radius: string | undefined) => {
    if (!radius) return 'N/A';
    return `${radius} pm`;
  };

  return (
    <Card className="element-physical-properties">
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          {t('details.properties', 'Физические свойства')}
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {element.melt && (
            <div className="property-item bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
              <div className="property-label text-sm font-bold text-gray-600 dark:text-gray-400 mb-1">
                {t('details.meltingPoint', 'Температура плавления')}
              </div>
              <div className="property-value text-lg font-bold text-gray-900 dark:text-gray-100">
                {formatTemperature(element.melt)}
              </div>
            </div>
          )}
          
          {element.boil && (
            <div className="property-item bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
              <div className="property-label text-sm font-bold text-gray-600 dark:text-gray-400 mb-1">
                {t('details.boilingPoint', 'Температура кипения')}
              </div>
              <div className="property-value text-lg font-bold text-gray-900 dark:text-gray-100">
                {formatTemperature(element.boil)}
              </div>
            </div>
          )}
          
          {element.density?.stp && (
            <div className="property-item bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
              <div className="property-label text-sm font-bold text-gray-600 dark:text-gray-400 mb-1">
                {t('details.density', 'Плотность')}
              </div>
              <div className="property-value text-lg font-bold text-gray-900 dark:text-gray-100">
                {element.density.stp} г/см³
              </div>
            </div>
          )}
          
          {element.electroneg && (
            <div className="property-item bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
              <div className="property-label text-sm font-bold text-gray-600 dark:text-gray-400 mb-1">
                {t('details.electronegativity', 'Электроотрицательность')}
              </div>
              <div className="property-value text-lg font-bold text-gray-900 dark:text-gray-100">
                {element.electroneg}
              </div>
            </div>
          )}
          
          {element.radius.calculated && (
            <div className="property-item bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
              <div className="property-label text-sm font-bold text-gray-600 dark:text-gray-400 mb-1">
                {t('details.atomicRadius', 'Атомный радиус')}
              </div>
              <div className="property-value text-lg font-bold text-gray-900 dark:text-gray-100">
                {formatRadius(element.radius.calculated)}
              </div>
            </div>
          )}
          
          {element.radius.covalent && (
            <div className="property-item bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
              <div className="property-label text-sm font-bold text-gray-600 dark:text-gray-400 mb-1">
                Ковалентный радиус
              </div>
              <div className="property-value text-lg font-bold text-gray-900 dark:text-gray-100">
                {formatRadius(element.radius.covalent)}
              </div>
            </div>
          )}
          
          {element.conductivity?.thermal && (
            <div className="property-item bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
              <div className="property-label text-sm font-bold text-gray-600 dark:text-gray-400 mb-1">
                Теплопроводность
              </div>
              <div className="property-value text-lg font-bold text-gray-900 dark:text-gray-100">
                {element.conductivity.thermal} Вт/м·К
              </div>
            </div>
          )}
          
          {element.oxidation && (
            <div className="property-item bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
              <div className="property-label text-sm font-bold text-gray-600 dark:text-gray-400 mb-1">
                {t('details.oxidationStates', 'Степени окисления')}
              </div>
              <div className="property-value text-lg font-bold text-gray-900 dark:text-gray-100">
                {element.oxidation}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ElementPhysicalProperties;
