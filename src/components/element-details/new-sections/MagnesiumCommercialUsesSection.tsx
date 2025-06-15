
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const MagnesiumCommercialUsesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Industrial & Everyday Uses</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Structural applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Automotive parts (engine blocks, wheels, transmission cases)</li>
            <li>Aerospace components (lightweight structural parts)</li>
            <li>Electronic devices (laptop cases, mobile phone frames)</li>
            <li>Sporting goods (bicycle frames, tennis rackets)</li>
          </ul>
          <div><strong>Chemical industry:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Desulfurization agent in iron and steel production</li>
            <li>Reduction agent for titanium and other metals</li>
            <li>Grignard reagents in organic synthesis</li>
            <li>Cathodic protection systems</li>
          </ul>
          <div><strong>Pyrotechnics and military:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Flares and signal devices</li>
            <li>Fireworks (white light)</li>
            <li>Incendiary devices</li>
            <li>Flash photography (historically)</li>
          </ul>
          <div><strong>Medical and biological:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Dietary supplements</li>
            <li>Antacids (magnesium hydroxide)</li>
            <li>Laxatives (magnesium sulfate - Epsom salt)</li>
            <li>Essential nutrient for plants and animals</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default MagnesiumCommercialUsesSection;
