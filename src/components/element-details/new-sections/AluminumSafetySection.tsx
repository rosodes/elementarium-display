
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const AluminumSafetySection: React.FC = () => {
  return (
    <Card className="my-4 border border-yellow-200 dark:border-yellow-700">
      <CardHeader className="bg-yellow-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Safety & Health Considerations</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>General safety:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Metallic aluminum is generally safe to handle</li>
            <li>Aluminum powder is flammable and explosive when dispersed in air</li>
            <li>Welding aluminum produces toxic fumes - ventilation required</li>
            <li>Aluminum oxide particles can cause respiratory irritation</li>
          </ul>
          <div><strong>Health considerations:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Low toxicity through normal exposure routes</li>
            <li>Excessive intake may be linked to neurological disorders (controversial)</li>
            <li>Aluminum sulfate (alum) used safely in water treatment</li>
            <li>Some aluminum compounds used as food additives and antacids</li>
            <li>Occupational exposure limits established for aluminum dusts</li>
          </ul>
          <div><strong>Environmental impact:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Primary production is energy-intensive (high carbon footprint)</li>
            <li>Recycling is highly beneficial environmentally</li>
            <li>Bauxite mining can cause habitat disruption</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default AluminumSafetySection;
