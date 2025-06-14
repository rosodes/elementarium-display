
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

/**
 * Современные направления: энергетика, топливные ячейки и зеленая экономика
 */
const HydrogenEnergySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Hydrogen Energy</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>
            <strong>Fuel Cells</strong>: Clean electricity for vehicles, buses, and backup power.
          </li>
          <li>
            <strong>Green Hydrogen</strong>: Produced by water electrolysis using renewable energy sources.
          </li>
          <li>
            <strong>Energy Storage</strong>: Can store surplus renewable electricity as chemical energy.
          </li>
          <li>
            <strong>Hydrogen Economy</strong>: Future vision for energy system with reduced CO₂ emissions.
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default HydrogenEnergySection;
