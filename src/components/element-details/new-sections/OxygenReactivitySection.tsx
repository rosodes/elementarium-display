
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const OxygenReactivitySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Highly reactive gas, supports combustion</li>
          <li>Forms oxides with almost all elements except noble gases</li>
          <li>Essential for cellular respiration and metabolism</li>
          <li>Reacts with metals to form metal oxides: 4Fe + 3O₂ → 2Fe₂O₃</li>
          <li>Combustion reactions: CH₄ + 2O₂ → CO₂ + 2H₂O</li>
          <li>Forms ozone (O₃) in upper atmosphere and electrical discharges</li>
          <li>Reacts with hydrogen to form water: 2H₂ + O₂ → 2H₂O</li>
          <li>Oxidizes organic compounds, causing aging and decay</li>
          <li>Forms peroxides with active metals</li>
          <li>Does not react with noble gases under normal conditions</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default OxygenReactivitySection;
