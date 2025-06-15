
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CarbonHistorySection: React.FC = () => (
  <Card className="my-4 border border-gray-300 dark:border-gray-700">
    <CardHeader className="bg-slate-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">History & Discovery</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Ancient use:</strong> Carbon was known to ancient civilizations in the form of charcoal and soot. The Egyptians produced charcoal around 3750 BCE for metal smelting and preservation. Diamonds and graphite have also been recognized since antiquity.
      </div>
      <div>
        <strong>Element status:</strong> Antoine Lavoisier recognized carbon as an element in 1772 (‘charcoal’ and ‘diamond’ both being forms of carbon).
      </div>
      <div>
        <strong>Etymology:</strong> The name "carbon" comes from the Latin "carbo" meaning "charcoal".
      </div>
      <div>
        <strong>Historical milestones:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Diamond proved to be pure carbon by Smithson Tennant, 1796.</li>
          <li>Graphite discovered as a form of carbon by Abraham Werner, 1789.</li>
          <li>First synthetic diamond produced, 1953 (Sweden).</li>
          <li>Discovery of fullerenes (C<sub>60</sub>) in 1985 opened nanoscience era.</li>
        </ul>
      </div>
      <div>
        <strong>Modern developments:</strong> Graphene isolated in 2004, earning Nobel Prize in Physics (2010). Carbon's versatile bonding underpins organic chemistry.
      </div>
    </CardContent>
  </Card>
);

export default CarbonHistorySection;
