
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ScandiumCommercialUsesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Commercial Uses</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Aerospace applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Aircraft structural components</li>
            <li>Jet engine parts</li>
            <li>Spacecraft components</li>
            <li>High-performance aluminum alloys</li>
          </ul>
          <div><strong>Sports equipment:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Premium bicycle frames</li>
            <li>Baseball bats</li>
            <li>Golf club shafts</li>
            <li>Fishing rods</li>
          </ul>
          <div><strong>Electronics and lighting:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>High-intensity discharge lamps</li>
            <li>Mercury vapor lamps</li>
            <li>Television tubes (historically)</li>
            <li>Lasers</li>
          </ul>
          <div><strong>Emerging applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Solid oxide fuel cells</li>
            <li>3D printing materials</li>
            <li>Nuclear reactor components</li>
            <li>Medical isotope production</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScandiumCommercialUsesSection;
