
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SiliconExtractionSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Production & Extraction</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Produced industrially by reduction of quartz (SiO₂) with carbon in an electric arc furnace.</li>
        <li>Commercial “metallurgical grade” silicon: ~98% purity, mainly for alloys (aluminum-silicon, ferrosilicon).</li>
        <li>“Polysilicon” (99.9999% pure) is used in semiconductors and photovoltaics, obtained via chemical vapor deposition (CVD).</li>
        <li>Silicon ingots are grown by the Czochralski process for microchips.</li>
        <li>China is the leading producer (over 70% global output), followed by Russia and the USA.</li>
        <li>Also recycled from electronic scrap for sustainability.</li>
      </ul>
    </CardContent>
  </Card>
);

export default SiliconExtractionSection;
