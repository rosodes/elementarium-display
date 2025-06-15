
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const TitaniumCommercialUsesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Commercial Uses</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Aerospace industry:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Aircraft engines and structural components</li>
            <li>Spacecraft hulls and heat shields</li>
            <li>Helicopter rotor blades</li>
            <li>Missile and rocket components</li>
          </ul>
          <div><strong>Medical applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Hip and knee joint replacements</li>
            <li>Dental implants and crowns</li>
            <li>Surgical instruments</li>
            <li>Pacemaker cases</li>
          </ul>
          <div><strong>Industrial applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Chemical processing equipment</li>
            <li>Marine propeller shafts</li>
            <li>Offshore oil platform components</li>
            <li>Nuclear reactor components</li>
          </ul>
          <div><strong>Consumer products:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>High-end bicycle frames</li>
            <li>Golf clubs and tennis rackets</li>
            <li>Jewelry and watches</li>
            <li>Eyeglass frames</li>
          </ul>
          <div><strong>Pigments and coatings:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>White paint pigments (TiO₂)</li>
            <li>Sunscreen formulations</li>
            <li>Paper and plastic whitening</li>
            <li>Food coloring applications</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default TitaniumCommercialUsesSection;
