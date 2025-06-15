
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NitrogenCompoundsSection: React.FC = () => (
  <Card className="my-4 border border-blue-200 dark:border-blue-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Compounds &amp; Chemistry</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Nitrogen forms simple diatomic gas N<sub>2</sub> and a huge range of inorganic and organic compounds.</li>
        <li>Ammonia (NH<sub>3</sub>), nitrites, nitrates, nitric oxide (NO), nitrous oxide (N<sub>2</sub>O), and urea are prominent nitrogen compounds.</li>
        <li>Nitrogen occurs in oxidation states from -3 (ammonia) to +5 (nitrates).</li>
        <li>Vital for DNA, proteins, fertilizers, and the nitrogen cycle.</li>
      </ul>
    </CardContent>
  </Card>
);
export default NitrogenCompoundsSection;
