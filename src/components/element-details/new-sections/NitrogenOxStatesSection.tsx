
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NitrogenOxStatesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Oxidation States</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Common oxidation states:</strong> -3, -2, -1, 0, +1, +2, +3, +4, +5</div>
          <div><strong>Most stable:</strong> -3, +5</div>
          <div className="space-y-1">
            <div><strong>Examples:</strong></div>
            <ul className="list-disc pl-4 space-y-1">
              <li>-3: Ammonia (NH₃), ammonium ion (NH₄⁺)</li>
              <li>-2: Hydrazine (N₂H₄)</li>
              <li>-1: Hydroxylamine (NH₂OH)</li>
              <li>0: Nitrogen gas (N₂)</li>
              <li>+1: Nitrous oxide (N₂O)</li>
              <li>+2: Nitric oxide (NO)</li>
              <li>+3: Nitrous acid (HNO₂), nitrogen trioxide (N₂O₃)</li>
              <li>+4: Nitrogen dioxide (NO₂)</li>
              <li>+5: Nitric acid (HNO₃), nitrates</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NitrogenOxStatesSection;
