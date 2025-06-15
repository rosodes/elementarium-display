
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const AluminumCommercialUsesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Commercial Uses & Applications</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Transportation (biggest use ~27%):</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Aircraft frames, engine components, landing gear</li>
            <li>Automotive parts: engine blocks, wheels, body panels</li>
            <li>Ship hulls, railway cars, truck trailers</li>
          </ul>
          <div><strong>Packaging (~17%):</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Beverage cans, food containers, foil wrapping</li>
            <li>Pharmaceutical packaging, cosmetic containers</li>
          </ul>
          <div><strong>Construction (~16%):</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Window frames, roofing, siding, structural elements</li>
            <li>Electrical wiring (power transmission lines)</li>
          </ul>
          <div><strong>Other applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Electronics: heat sinks, capacitor foil, reflectors</li>
            <li>Kitchen utensils, appliances, decorative items</li>
            <li>Military: armor plating, missiles, satellites</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default AluminumCommercialUsesSection;
