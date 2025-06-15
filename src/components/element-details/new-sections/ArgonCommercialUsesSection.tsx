
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ArgonCommercialUsesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Commercial Uses</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Welding and metallurgy (largest use):</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Shielding gas for arc welding</li>
            <li>Prevents oxidation during metal processing</li>
            <li>Essential for welding aluminum and stainless steel</li>
          </ul>
          <div><strong>Electronics industry:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Growing silicon and germanium crystals</li>
            <li>Sputtering target manufacturing</li>
            <li>Cleaning semiconductor wafers</li>
            <li>Inert atmosphere for electronics assembly</li>
          </ul>
          <div><strong>Lighting applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Incandescent light bulb fill gas</li>
            <li>Fluorescent lamp starter gas</li>
            <li>Neon signs (blue-violet color)</li>
            <li>Laser applications</li>
          </ul>
          <div><strong>Specialty applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Wine preservation and food packaging</li>
            <li>Document and artwork preservation</li>
            <li>Diving gas mixtures (technical diving)</li>
            <li>Fire suppression systems</li>
            <li>Analytical chemistry (carrier gas)</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArgonCommercialUsesSection;
