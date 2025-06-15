
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BoronExtractionSection: React.FC = () => (
  <Card className="my-4 border border-blue-200 dark:border-blue-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Production &amp; Synthesis</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Mining:</strong> Boron is commercially obtained from borate minerals (especially borax, kernite, colemanite). Turkey and California (USA) are major producers.
      </div>
      <div>
        <strong>Purification:</strong> Borax ore is dissolved in hot water and recrystallized; further refining yields boric acid and boron oxide (B<sub>2</sub>O<sub>3</sub>).
      </div>
      <div>
        <strong>Elemental boron production:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Reduction of boron trioxide (B<sub>2</sub>O<sub>3</sub>) with magnesium, aluminum, or sodium: <br /> B<sub>2</sub>O<sub>3</sub> + 3Mg → 2B + 3MgO</li>
          <li>Electrolysis of molten boron halides (rare, lab-scale).</li>
          <li>Vapor phase reduction with hydrogen (high-purity boron for electronics).</li>
        </ul>
      </div>
      <div>
        <strong>Uses of boron compounds:</strong> Glass fiber, ceramics, detergents, agriculture, semiconductors, nuclear control rods (boron-10 isotope).
      </div>
    </CardContent>
  </Card>
);

export default BoronExtractionSection;
