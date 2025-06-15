
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SodiumCommercialUsesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Commercial Uses</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Sodium metal applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Heat transfer agent in nuclear reactors</li>
            <li>Sodium vapor lamps for street lighting</li>
            <li>Reducing agent in metallurgy</li>
            <li>Production of sodium compounds</li>
          </ul>
          <div><strong>Sodium compounds:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Sodium chloride (salt) - food industry, de-icing</li>
            <li>Sodium hydroxide (lye) - soap, paper, textiles</li>
            <li>Sodium carbonate (soda ash) - glass manufacturing</li>
            <li>Sodium bicarbonate (baking soda) - food, cleaning</li>
          </ul>
          <div><strong>Industrial processes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Titanium and zirconium production</li>
            <li>Organic synthesis reactions</li>
            <li>Pharmaceutical manufacturing</li>
            <li>Water treatment and purification</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default SodiumCommercialUsesSection;
