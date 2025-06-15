
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NitrogenExtractionSection: React.FC = () => (
  <Card className="my-4 border border-blue-200 dark:border-blue-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Production &amp; Synthesis</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Main production method:</strong> Fractional distillation of liquefied air; produces high-purity nitrogen for industrial/medical use.
      </div>
      <div>
        <strong>Other methods:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li><strong>Membrane/adsorption separation:</strong> PSA (pressure swing adsorption) techniques for smaller-scale supply</li>
          <li><strong>Laboratory preparation:</strong> Heating ammonium salts with sodium nitrite (generates N<sub>2</sub> gas)</li>
        </ul>
      </div>
      <div>
        <strong>Industrial importance:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Protective atmosphere for oxidation-sensitive processes</li>
          <li>Blanketing, purging, and pressurizing chemicals</li>
        </ul>
      </div>
      <div>
        <strong>Ammonia synthesis:</strong> Haber-Bosch process: N<sub>2</sub> + 3H<sub>2</sub> → 2NH<sub>3</sub> (high T/P); fundamental for fertilizer production worldwide.
      </div>
      <div className="mt-2 text-[11px] text-gray-500">
        Sources: Air Liquide, Linde, NobelPrize.org
      </div>
    </CardContent>
  </Card>
);

export default NitrogenExtractionSection;
