
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const PhosphorusOxStatesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Compounds & Chemistry</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div>
        <b>Oxidation States:</b>
        <ul className="pl-4 list-disc">
          <li>-3: phosphides (Ca₃P₂, PH₃)</li>
          <li>+3: phosphorus trichloride (PCl₃), phosphorous acid (H₃PO₃)</li>
          <li>+5: phosphoric acid (H₃PO₄), phosphorus pentachloride (PCl₅), phosphates (DNA, ATP, Ca₃(PO₄)₂)</li>
          <li>0: elemental white, red, black phosphorus (allotropes)</li>
        </ul>
        <div className="mt-2">
          <b>Important Compounds:</b>
          <ul className="pl-4 list-disc space-y-1">
            <li><b>Phosphates:</b> fertilizers, biochemistry, industrial chemicals</li>
            <li><b>Phosphoric acid:</b> soft drinks, food additive, detergents</li>
            <li><b>Phosphine (PH₃):</b> toxic gas, fumigant</li>
            <li><b>Match production:</b> red phosphorus</li>
          </ul>
        </div>
        <div className="mt-2">
          <b>Chemical Reactivity:</b>
          <ul className="pl-4 list-disc">
            <li>White phosphorus is highly reactive and spontaneously ignites in air.</li>
            <li>Red and black phosphorus are more stable.</li>
          </ul>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default PhosphorusOxStatesSection;
