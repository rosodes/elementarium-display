
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CarbonSafetySection: React.FC = () => (
  <Card className="my-4 border border-gray-300 dark:border-gray-700">
    <CardHeader className="bg-slate-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Safety & Precautions</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Elemental forms:</strong> Graphite, diamond, and activated carbon are non-toxic and safe to handle.
      </div>
      <div>
        <strong>Major hazards:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Carbon monoxide (CO): Deadly toxic, colorless, odorless gas; rapidly fatal in enclosed spaces.</li>
          <li>Carbon dioxide (CO<sub>2</sub>): Asphyxiant at high concentrations.</li>
          <li>Soot/coal dust: Long-term inhalation can cause respiratory disease (pneumoconiosis, lung cancer).</li>
        </ul>
      </div>
      <div>
        <strong>Handling recommendations:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Ensure ventilation in areas where CO or CO<sub>2</sub> may accumulate.</li>
          <li>Wear respiratory protection when working with fine carbon dusts or soot.</li>
          <li>Store carbon sources away from strong oxidizers.</li>
          <li>Consult material safety data sheets for industrial carbon compounds.</li>
        </ul>
      </div>
    </CardContent>
  </Card>
);

export default CarbonSafetySection;
