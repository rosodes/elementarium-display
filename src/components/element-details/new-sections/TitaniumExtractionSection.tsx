
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const TitaniumExtractionSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Extraction & Production</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Mining operations:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Heavy mineral sand mining (ilmenite, rutile)</li>
            <li>Dredging of beach and marine deposits</li>
            <li>Hard rock mining for primary ores</li>
            <li>Magnetic and electrostatic separation</li>
          </ul>
          <div><strong>Kroll process (primary method):</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Convert ore to titanium tetrachloride (TiCl₄)</li>
            <li>Reduce with molten magnesium at 800°C</li>
            <li>Vacuum distillation to remove magnesium</li>
            <li>Remelting under inert atmosphere</li>
          </ul>
          <div><strong>Alternative methods:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Hunter process (sodium reduction)</li>
            <li>Electrolytic reduction</li>
            <li>Plasma arc melting</li>
            <li>Electron beam melting</li>
          </ul>
          <div><strong>Challenges:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>High energy requirements</li>
            <li>Complex multi-step process</li>
            <li>Expensive production costs</li>
            <li>Need for ultra-pure materials</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default TitaniumExtractionSection;
