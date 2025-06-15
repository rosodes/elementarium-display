
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
          <li>Relatively unreactive at room temperature</li>
          <li>Forms protective oxide layer: Si + O₂ → SiO₂</li>
          <li>Reacts with halogens at elevated temperatures</li>
          <li>Dissolves in hot alkali: Si + 4NaOH → Na₄SiO₄ + 2H₂</li>
          <li>Reacts with hydrofluoric acid: Si + 6HF → H₂SiF₆ + 2H₂</li>
          <li>Forms carbide at high temperature: Si + C → SiC</li>
          <li>Does not react with most acids except HF</li>
          <li>Can form silanes (SiₙH₂ₙ₊₂) similar to alkanes</li>
          <li>Burns in air at high temperature to form SiO₂</li>
          <li>Forms extensive covalent network structures</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default SiliconReactivitySection;
