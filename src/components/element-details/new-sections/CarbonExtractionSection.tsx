
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CarbonExtractionSection: React.FC = () => (
  <Card className="my-4 border border-gray-300 dark:border-gray-700">
    <CardHeader className="bg-slate-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Production & Extraction</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>From natural sources:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Charcoal produced by pyrolysis of wood/organic matter.</li>
          <li>Graphite mined in natural deposits (China, India, Brazil).</li>
          <li>Diamond found/mined in kimberlite pipes (Africa, Russia, Canada).</li>
        </ul>
      </div>
      <div>
        <strong>Industrial production:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Soot (carbon black) by incomplete combustion of hydrocarbons.</li>
          <li>Synthetic graphite via high-temperature processing of coke.</li>
          <li>Synthetic diamond made under high-pressure/high-temperature (HPHT) or chemical vapor deposition (CVD).</li>
        </ul>
      </div>
      <div>
        <strong>Purification:</strong> Physical and chemical purification for use in electronics, metallurgy, and research.
      </div>
    </CardContent>
  </Card>
);

export default CarbonExtractionSection;
