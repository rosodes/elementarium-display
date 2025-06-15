
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const PhosphorusExtractionSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Extraction & Production</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Primary method - Electric furnace process:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Heat phosphate rock with coke and sand at 1500°C</li>
            <li>Reaction: 2Ca₃(PO₄)₂ + 6SiO₂ + 10C → 6CaSiO₃ + P₄ + 10CO</li>
            <li>Phosphorus vapor condensed under water</li>
            <li>Produces white phosphorus directly</li>
          </ul>
          <div><strong>Red phosphorus production:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Heat white phosphorus to 250°C without air</li>
            <li>Converts to more stable red allotrope</li>
          </ul>
          <div><strong>Historical methods:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Distillation of urine (original method)</li>
            <li>Bone ash processing</li>
          </ul>
          <div><strong>Production scale:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Global production: ~1 million tonnes/year</li>
            <li>Major producers: China, USA, Kazakhstan</li>
            <li>High energy requirements for furnace process</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default PhosphorusExtractionSection;
