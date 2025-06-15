
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CarbonSafetySection: React.FC = () => (
  <Card className="my-4 border border-gray-300 dark:border-gray-700">
    <CardHeader className="bg-slate-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Safety &amp; Precautions</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Elemental forms:</strong> Diamond, graphite, and activated carbon are non-toxic and safe to handle. Activated charcoal is used in medicine for poison treatment.
      </div>
      <div>
        <strong>Major hazards:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Carbon monoxide (CO): highly toxic, colorless, odorless; rapidly fatal in enclosed spaces. Prevent CO buildup from stoves, heaters, vehicle exhaust.</li>
          <li>Carbon dioxide (CO<sub>2</sub>): asphyxiant at high concentrations (e.g., confined spaces, dry ice). Ensure ventilation in areas where CO<sub>2</sub> can accumulate.</li>
          <li>Soot, coal dust: inhalation causes “black lung” disease and increases cancer risk (long-term occupational exposure).</li>
        </ul>
      </div>
      <div>
        <strong>Handling recommendations:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Provide ventilation when burning carbon fuels or using carbon-containing gases indoors.</li>
          <li>Use respiratory protection in dusty environments (mines, production plants).</li>
          <li>Follow safety data sheets for industrial carbon chemicals (e.g. cyanides, carbon tetrachloride).</li>
        </ul>
      </div>
      <div>
        <strong>Environmental risk:</strong> Excess carbon emissions as CO<sub>2</sub> and methane are leading contributors to global warming and climate change.
      </div>
      <div className="mt-2 text-xs text-gray-500">
        Sources: CDC, EPA, IARC Monographs, OSHA
      </div>
    </CardContent>
  </Card>
);

export default CarbonSafetySection;
