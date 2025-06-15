
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SiliconExtractionSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Extraction & Production</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Industrial silicon production:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Carbothermic reduction of silica: SiO₂ + 2C → Si + 2CO</li>
            <li>Electric arc furnace at 1900-2000°C</li>
            <li>Produces metallurgical grade silicon (98-99% pure)</li>
          </ul>
          <div><strong>Electronic grade silicon:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Siemens process: SiHCl₃ → Si + HCl</li>
            <li>Chemical vapor deposition on heated silicon rods</li>
            <li>Produces 99.9999999% pure silicon</li>
            <li>Zone refining for final purification</li>
          </ul>
          <div><strong>Crystal growth:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Czochralski process for single crystals</li>
            <li>Float zone method for ultra-pure crystals</li>
            <li>Creates silicon ingots up to 300mm diameter</li>
          </ul>
          <div><strong>Production scale:</strong> ~8 million tonnes/year globally</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SiliconExtractionSection;
