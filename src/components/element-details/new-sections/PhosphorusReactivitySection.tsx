
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const PhosphorusReactivitySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>White phosphorus is highly reactive and pyrophoric in air</li>
          <li>Burns in air: P₄ + 5O₂ → P₄O₁₀</li>
          <li>Reacts with halogens: P₄ + 6Cl₂ → 4PCl₃</li>
          <li>Forms phosphine with metals: Ca₃P₂ + 6H₂O → 3Ca(OH)₂ + 2PH₃</li>
          <li>Red phosphorus is much less reactive than white</li>
          <li>Reacts with nitric acid: P + 5HNO₃ → H₃PO₄ + 5NO₂ + H₂O</li>
          <li>Forms phosphides with metals at high temperature</li>
          <li>Does not react with water under normal conditions</li>
          <li>Black phosphorus is least reactive allotrope</li>
          <li>Essential in biological energy transfer (ATP, ADP)</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default PhosphorusReactivitySection;
