
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const PotassiumCommercialUsesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Commercial Uses</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Agriculture (90% of production):</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Fertilizers (KCl, K₂SO₄, KNO₃)</li>
            <li>Essential plant nutrient for growth</li>
            <li>Improves crop yield and quality</li>
          </ul>
          <div><strong>Industrial applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Glass manufacturing (potash glass)</li>
            <li>Soap and detergent production</li>
            <li>Photography (potassium bromide)</li>
            <li>Gunpowder and explosives (saltpeter)</li>
            <li>Medical uses (potassium supplements)</li>
          </ul>
          <div><strong>Specialized uses:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Heat transfer fluid in nuclear reactors</li>
            <li>Laboratory reagent</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default PotassiumCommercialUsesSection;
