
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const PhosphorusCommercialUsesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Commercial Uses</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Fertilizer industry (largest use):</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Phosphoric acid production for fertilizers</li>
            <li>Superphosphate and ammonium phosphate</li>
            <li>Essential plant nutrient</li>
          </ul>
          <div><strong>Industrial chemicals:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Detergents and cleaning agents</li>
            <li>Water treatment chemicals</li>
            <li>Food additives and preservatives</li>
            <li>Flame retardants</li>
          </ul>
          <div><strong>Specialty applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Red phosphorus in safety matches</li>
            <li>Semiconductor doping agent</li>
            <li>Steel production (phosphorus removal)</li>
            <li>Pyrotechnics and fireworks</li>
          </ul>
          <div><strong>Biological applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Essential dietary supplement</li>
            <li>Medical isotopes for therapy</li>
            <li>Biochemical research tracers</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default PhosphorusCommercialUsesSection;
