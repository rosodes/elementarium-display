
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const PhosphorusOxStatesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Oxidation States</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Common oxidation states:</strong> -3, +3, +5</div>
          <div><strong>Most stable:</strong> +5</div>
          <div><strong>Examples by oxidation state:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>-3: Phosphides (Ca₃P₂, AlP), phosphine (PH₃)</li>
            <li>+3: Phosphorous acid (H₃PO₃), phosphorus trichloride (PCl₃)</li>
            <li>+5: Phosphoric acid (H₃PO₄), phosphorus pentachloride (PCl₅)</li>
            <li>+5: Phosphates (Ca₃(PO₄)₂), ATP, DNA backbone</li>
            <li>0: White, red, black phosphorus allotropes</li>
          </ul>
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            Phosphorus readily forms covalent bonds in multiple oxidation states.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PhosphorusOxStatesSection;
