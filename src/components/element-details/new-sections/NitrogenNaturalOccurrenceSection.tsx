
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NitrogenNaturalOccurrenceSection: React.FC = () => (
  <Card className="my-4 border border-blue-200 dark:border-blue-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Occurrence &amp; Abundance</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Atmospheric abundance:</strong> Nitrogen makes up 78.1% of Earth's atmosphere by volume, making it the most abundant uncombined element in air.
      </div>
      <div>
        <strong>Terrestrial sources:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li><strong>Atmosphere:</strong> Main reservoir as N<sub>2</sub> gas</li>
          <li><strong>Minerals:</strong> Nitrates (NaNO<sub>3</sub>, KNO<sub>3</sub>), ammonium salts</li>
        </ul>
      </div>
      <div>
        <strong>Bio-geochemical cycle:</strong> Nitrogen cycles through atmosphere, soil, water, and living organisms (nitrogen cycle).
      </div>
      <div>
        <strong>Cosmic abundance:</strong> Less abundant than carbon, oxygen, but commonly found in stellar atmospheres and interstellar gas.
      </div>
      <div className="mt-2 text-[11px] text-gray-500">
        Sources: USGS, NASA, Nature Geoscience
      </div>
    </CardContent>
  </Card>
);

export default NitrogenNaturalOccurrenceSection;
