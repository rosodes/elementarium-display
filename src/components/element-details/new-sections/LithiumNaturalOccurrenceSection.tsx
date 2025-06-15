
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

/** Occurrence & Abundance of Lithium */
const LithiumNaturalOccurrenceSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Natural Occurrence</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Abundance:</strong> Lithium is the 25th most abundant element in Earth's crust (~20 ppm), but rarely found in high concentrations.
      </div>
      <div>
        <strong>Main sources:</strong>
        <ul className="list-disc pl-4">
          <li>Minerals: <b>Spodumene</b> (LiAlSi₂O₆), <b>lepidolite</b> (a lithium mica), <b>petalite</b> (LiAlSi₄O₁₀).</li>
          <li>Brines: High concentrations in salt lake brines and some groundwater (e.g., South America: Salar de Atacama, Uyuni, Hombre Muerto).</li>
        </ul>
      </div>
      <div>
        <strong>In nature:</strong> Lithium never occurs as free metal—it's too reactive, always found as compounds.
      </div>
      <div>
        <strong>Major producing countries:</strong> Australia (hard rock mining), Chile, Argentina, China, Zimbabwe.
      </div>
      <div>
        <strong>Other presence:</strong> Trace in sea water (0.17 ppm), living organisms in tiny amounts, and minor in air.
      </div>
      <div className="mt-1 text-xs text-gray-500">
        Sources: USGS Minerals Commodity Summaries, Royal Society of Chemistry, CRC Handbook.
      </div>
    </CardContent>
  </Card>
);
export default LithiumNaturalOccurrenceSection;
