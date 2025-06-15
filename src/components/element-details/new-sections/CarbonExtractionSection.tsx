
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CarbonExtractionSection: React.FC = () => (
  <Card className="my-4 border border-gray-300 dark:border-gray-700">
    <CardHeader className="bg-slate-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Production &amp; Synthesis</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Natural sources:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Charcoal made by heating wood or organic matter in partial absence of air (pyrolysis).</li>
          <li>Graphite extracted from natural mineral deposits (major producers: China, India, Brazil).</li>
          <li>Diamond mined from kimberlite pipes (Africa, Russia, Australia, Canada, Brazil).</li>
        </ul>
      </div>
      <div>
        <strong>Industrial production:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Soot (carbon black): obtained by incomplete combustion of hydrocarbons, used in ink, tires, pigments.</li>
          <li>Synthetic graphite: produced by heating petroleum coke to high temperatures.</li>
          <li>Synthetic diamond: produced by high-pressure/high-temperature (HPHT) or chemical vapor deposition (CVD).</li>
        </ul>
      </div>
      <div>
        <strong>Laboratory methods:</strong> Decomposition of sugars, organic acids, or heating of pure organic compounds in inert atmosphere.
      </div>
      <div>
        <strong>Purification:</strong> Recrystallization, zone refining, and chemical purification especially for electronics and research.
      </div>
      <div>
        <strong>Environmental aspect:</strong> Carbon capture and storage (CCS), "green" production methods discussed to mitigate climate change.
      </div>
      <div className="mt-2 text-xs text-gray-500">
        Sources: USGS Minerals Yearbook, RSC, CRC Handbook
      </div>
    </CardContent>
  </Card>
);

export default CarbonExtractionSection;
