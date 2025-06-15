
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Abundance and occurrence for Fluorine
const FluorineNaturalOccurrenceSection: React.FC = () => (
  <Card className="my-4 border border-green-200 dark:border-green-700">
    <CardHeader className="bg-green-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Occurrence &amp; Abundance</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Crustal abundance:</strong> Fluorine is the 13th most abundant element in Earth's crust (~0.06% by weight).
      </div>
      <div>
        <strong>Main minerals:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Fluorite (CaF<sub>2</sub>): major industrial source</li>
          <li>Cryolite (Na<sub>3</sub>AlF<sub>6</sub>): rarer, used in aluminum refining</li>
          <li>Apatite [Ca<sub>5</sub>(PO<sub>4</sub>)<sub>3</sub>F]: phosphate mineral with fluorine</li>
        </ul>
      </div>
      <div>
        <strong>Atmosphere:</strong> Free fluorine does not exist in nature due to its reactivity.
      </div>
      <div>
        <strong>Hydrosphere:</strong> Fluoride ions are present in seawater (average ~1.3 mg/L) and in some groundwater.
      </div>
      <div>
        <strong>Biological presence:</strong> Trace amounts in bones, teeth, and some plants/animals.
      </div>
      <div>
        <strong>Cosmic abundance:</strong> Fluorine is relatively rare in the universe, likely produced in stars via nuclear reactions.
      </div>
      <div className="mt-2 text-[11px] text-gray-500">
        Sources: USGS, CRC Handbook, Nature Geoscience
      </div>
    </CardContent>
  </Card>
);

export default FluorineNaturalOccurrenceSection;
