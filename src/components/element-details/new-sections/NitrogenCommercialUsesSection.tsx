
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NitrogenCommercialUsesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Commercial Uses</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Fertilizer industry (80% of production):</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Ammonia production for fertilizers</li>
            <li>Urea synthesis</li>
            <li>Ammonium nitrate and sulfate</li>
          </ul>
          <div><strong>Industrial applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Inert atmosphere for welding and metal processing</li>
            <li>Food packaging to prevent spoilage</li>
            <li>Electronics manufacturing (inert atmosphere)</li>
            <li>Oil and gas industry (pressure maintenance)</li>
          </ul>
          <div><strong>Cryogenic applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Food freezing and preservation</li>
            <li>Medical procedures (cryotherapy)</li>
            <li>Laboratory coolant</li>
            <li>Superconducting magnet cooling</li>
          </ul>
          <div><strong>Chemical industry:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Synthesis of nitric acid</li>
            <li>Explosives manufacturing</li>
            <li>Pharmaceutical intermediates</li>
            <li>Plastics and synthetic materials</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default NitrogenCommercialUsesSection;
