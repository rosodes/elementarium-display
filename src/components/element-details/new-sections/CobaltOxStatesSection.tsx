
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CobaltOxStatesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Oxidation States</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Common oxidation states:</strong> +2, +3</div>
          <div><strong>Most stable:</strong> +2 and +3</div>
          <div><strong>Examples by oxidation state:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>+2: Cobalt(II) chloride (CoCl₂), cobalt(II) oxide (CoO)</li>
            <li>+3: Cobalt(III) oxide (Co₂O₃), cobalt(III) chloride (CoCl₃)</li>
            <li>+4: Cobalt(IV) oxide (CoO₂) - rare</li>
            <li>0: Metallic cobalt</li>
            <li>Complex ions: [Co(NH₃)₆]³⁺, [Co(CN)₆]³⁻</li>
          </ul>
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            Co²⁺ compounds are typically pink, while Co³⁺ compounds are usually blue or green.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CobaltOxStatesSection;
