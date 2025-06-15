
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SodiumExtractionSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Extraction & Production</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div className="space-y-2">
        <div><strong>Main industrial method:</strong> Downs cell electrolytic process.</div>
        <ul className="list-disc pl-4">
          <li>Electrolysis of molten NaCl (with CaCl<sub>2</sub> to lower melting point)</li>
          <li>Produces sodium metal and chlorine gas as byproduct</li>
          <li>High energy requirement, operates at ~600°C</li>
        </ul>
        <div><strong>Historic method:</strong> Castner process (electrolysis of NaOH)</div>
        <div><strong>Applications:</strong> Sodium metal for chemical syntheses, heat transfer, lighting, some alloys</div>
      </div>
    </CardContent>
  </Card>
);

export default SodiumExtractionSection;
