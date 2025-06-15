
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BoronExtractionSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Extraction & Production</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>From borate minerals:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Mining of borax and kernite deposits</li>
            <li>Dissolution in hot water</li>
            <li>Crystallization to produce pure borax</li>
            <li>Conversion to boric acid (H₃BO₃)</li>
          </ul>
          <div><strong>Elemental boron production:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Reduction of B₂O₃ with magnesium at high temperature</li>
            <li>Electrolysis of molten potassium borofluoride</li>
            <li>Vapor phase reduction with hydrogen</li>
            <li>Thermal decomposition of boron halides</li>
          </ul>
          <div><strong>Purification:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Zone refining for ultra-pure boron</li>
            <li>Chemical vapor deposition</li>
            <li>Recrystallization of compounds</li>
          </ul>
          <div><strong>Industrial compounds:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Direct synthesis of boron carbide</li>
            <li>Production of boron nitride</li>
            <li>Manufacturing of borosilicate glass</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default BoronExtractionSection;

