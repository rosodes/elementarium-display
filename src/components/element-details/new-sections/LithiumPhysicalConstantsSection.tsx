
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

/**
 * Подробные физические константы для лития (Li)
 */
const LithiumPhysicalConstantsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Physical Constants</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="grid grid-cols-2 gap-2">
          <div><strong>Appearance:</strong> Silvery-white, soft metal</div>
          <div><strong>Melting Point:</strong> 180.5&nbsp;°C (453.7&nbsp;K)</div>
          <div><strong>Boiling Point:</strong> 1,342&nbsp;°C (1,615&nbsp;K)</div>
          <div><strong>Density:</strong> 0.534&nbsp;g/cm³ (lowest of all metals)</div>
          <div><strong>Hardness (Mohs):</strong> 0.6</div>
          <div><strong>Atomic Radius (empirical):</strong> 145&nbsp;pm</div>
          <div><strong>Covalent Radius:</strong> 128–134&nbsp;pm (varies by source)</div>
          <div><strong>van der Waals Radius:</strong> 182&nbsp;pm</div>
          <div><strong>Thermal Conductivity:</strong> 85&nbsp;W/(m·K)</div>
          <div><strong>Electrical Resistivity:</strong> 92.8&nbsp;nΩ·m</div>
          <div><strong>Molar heat capacity:</strong> 24.86&nbsp;J/(mol·K)</div>
          <div><strong>Specific heat:</strong> 3,579&nbsp;J/(kg·K)</div>
          <div><strong>Atomic mass:</strong> 6.938&nbsp;u (IUPAC standard atomic weight)</div>
          <div><strong>Crystal structure:</strong> Body-centered cubic</div>
          <div><strong>Magnetism:</strong> Paramagnetic</div>
          <div><strong>Color of flame:</strong> Crimson red</div>
        </div>
        <div className="mt-2 text-[11px] text-gray-500">
          Sources: CRC Handbook, IUPAC, WebElements
        </div>
      </CardContent>
    </Card>
  );
};

export default LithiumPhysicalConstantsSection;
