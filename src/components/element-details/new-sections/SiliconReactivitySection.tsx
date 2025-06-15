
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SiliconReactivitySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Relatively unreactive at room temperature due to oxide layer</li>
          <li>Reacts with oxygen at high temperatures: Si + O₂ → SiO₂</li>
          <li>Reacts with halogens: Si + 2Cl₂ → SiCl₄</li>
          <li>Dissolves in hydrofluoric acid: Si + 6HF → H₂SiF₆ + 2H₂</li>
          <li>Reacts with strong bases: Si + 4OH⁻ + 2H₂O → SiO₄⁴⁻ + 2H₂</li>
          <li>Forms silicides with metals at high temperatures</li>
          <li>Does not react with most acids except HF</li>
          <li>Can form silicon hydrides (silanes): SiH₄, Si₂H₆, etc.</li>
          <li>Reacts with carbon at high temperatures to form silicon carbide</li>
          <li>Forms organosilicon compounds with organic groups</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default SiliconReactivitySection;
