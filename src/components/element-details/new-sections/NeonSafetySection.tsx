
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NeonSafetySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Safety & Health</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>General safety:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Non-toxic and chemically inert</li>
            <li>Can cause asphyxiation in confined spaces</li>
            <li>Liquid neon is extremely cold (-246°C)</li>
            <li>High-pressure gas cylinders require care</li>
          </ul>
          <div><strong>Health considerations:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>No biological function or toxicity</li>
            <li>Cannot be metabolized by living organisms</li>
            <li>No environmental or health concerns</li>
            <li>Safe to breathe in small quantities</li>
          </ul>
          <div><strong>Handling precautions:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Ensure adequate ventilation</li>
            <li>Protect against frostbite from liquid neon</li>
            <li>Proper handling of gas cylinders</li>
            <li>Electrical safety with neon signs</li>
          </ul>
          <div><strong>Environmental impact:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>No environmental concerns</li>
            <li>Does not contribute to pollution</li>
            <li>Chemically inert in environment</li>
            <li>No ozone depletion or greenhouse effects</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default NeonSafetySection;
