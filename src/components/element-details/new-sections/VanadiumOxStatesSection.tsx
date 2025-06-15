
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Состояния окисления ванадия
const VanadiumOxStatesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Oxidation States</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div className="space-y-2">
        <div>
          <strong>Common oxidation states:</strong> +2, +3, +4, +5
        </div>
        <div>
          <strong>Examples by state:</strong>
        </div>
        <ul className="list-disc pl-4 space-y-1">
          <li>+5: VO₂<sup>+</sup> (vanadate), V₂O₅</li>
          <li>+4: VO<sup>2+</sup> (vanadyl)</li>
          <li>+3: V₂O₃, VCl₃</li>
          <li>+2: VCl₂</li>
          <li>Compounds can show striking colors depending on oxidation state</li>
        </ul>
        <div className="mt-2 text-gray-600 dark:text-gray-300">
          Vanadium exhibits a rich variety of oxidation states, enabling diverse chemical behavior.
        </div>
      </div>
    </CardContent>
  </Card>
);

export default VanadiumOxStatesSection;
