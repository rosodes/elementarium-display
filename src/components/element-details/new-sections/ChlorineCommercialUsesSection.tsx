
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ChlorineCommercialUsesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Commercial Uses</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Water treatment:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Municipal water disinfection</li>
            <li>Swimming pool sanitization</li>
            <li>Wastewater treatment</li>
            <li>Industrial water systems</li>
          </ul>
          <div><strong>Chemical industry:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>PVC plastic production (largest use)</li>
            <li>Chlorinated solvents (methylene chloride)</li>
            <li>Hydrochloric acid production</li>
            <li>Phosgene and other intermediates</li>
          </ul>
          <div><strong>Pharmaceuticals:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Many drugs contain chlorine atoms</li>
            <li>Antiseptics and disinfectants</li>
            <li>Anesthetics</li>
          </ul>
          <div><strong>Other applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Paper and pulp bleaching</li>
            <li>Textile processing</li>
            <li>Metal extraction and refining</li>
            <li>Pesticides and herbicides</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChlorineCommercialUsesSection;
