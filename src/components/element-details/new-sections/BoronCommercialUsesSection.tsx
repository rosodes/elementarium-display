
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BoronCommercialUsesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Commercial Uses</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Glass & Ceramics:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Borosilicate glass (Pyrex, laboratory glassware)</li>
            <li>Fiberglass insulation</li>
            <li>Optical glasses and lenses</li>
            <li>Heat-resistant ceramics</li>
          </ul>
          <div><strong>Nuclear applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Control rods in nuclear reactors</li>
            <li>Neutron shielding materials</li>
            <li>Neutron detection instruments</li>
            <li>Nuclear waste storage</li>
          </ul>
          <div><strong>Agriculture:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Micronutrient fertilizers</li>
            <li>Plant growth enhancement</li>
            <li>Soil conditioners</li>
          </ul>
          <div><strong>Advanced materials:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Boron carbide armor</li>
            <li>Boron nitride cutting tools</li>
            <li>Aerospace composites</li>
            <li>High-temperature superconductors</li>
          </ul>
          <div><strong>Other applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Detergents and bleaches</li>
            <li>Flame retardants</li>
            <li>Antiseptics and preservatives</li>
            <li>Rocket fuel additives</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default BoronCommercialUsesSection;
