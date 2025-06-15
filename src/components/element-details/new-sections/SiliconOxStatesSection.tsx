
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SiliconOxStatesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Compounds & Chemistry</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div>
        <strong>Oxidation States:</strong>
        <ul className="pl-4 list-disc">
          <li>Predominantly +4 in nature (Si⁴⁺, e.g., SiO₂, silicates)</li>
          <li>-4 in silicides (rare, and highly reactive)</li>
        </ul>
        <div className="mt-2">
          <strong>Main Compounds:</strong>
          <ul className="pl-4 list-disc space-y-1">
            <li><b>Silicon dioxide (SiO₂):</b> sand, quartz, glass</li>
            <li><b>Silicates:</b> feldspar, mica, olivine, clays</li>
            <li><b>Silicones (polysiloxanes):</b> synthetic polymers, heat-resistant materials</li>
          </ul>
        </div>
        <div className="mt-2">
          <b>Chemical Reactivity:</b>
          <ul className="pl-4 list-disc">
            <li>Inert at room temperature; resists most acids (except hydrofluoric acid)</li>
            <li>Burns in oxygen to form silicon dioxide</li>
            <li>Reacts with halogens when heated</li>
            <li>Forms silanes and silicides with some metals</li>
          </ul>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default SiliconOxStatesSection;
