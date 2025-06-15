
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CarbonCompoundsSection: React.FC = () => (
  <Card className="my-4 border border-blue-200 dark:border-blue-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Compounds &amp; Chemistry</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Carbon forms more compounds than any other element — the basis of organic chemistry.</li>
        <li>Major oxides: CO and CO<sub>2</sub>. Hydrocarbons include methane (CH<sub>4</sub>), ethane, benzene, etc.</li>
        <li>Capable of forming single, double, and triple bonds and chains, rings, frameworks, and complex structures.</li>
        <li>Vital for all life; endless chemistry of carbon in plastics, fuels, medicines, and more.</li>
      </ul>
    </CardContent>
  </Card>
);
export default CarbonCompoundsSection;
