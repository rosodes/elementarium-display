
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ChlorineExtractionSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Commercial Production & Extraction</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Chloralkali process: electrolysis of brine (NaCl solution)</li>
          <li>Membrane cell technology (modern method)</li>
          <li>Mercury cell process (being phased out)</li>
          <li>Diaphragm cell process</li>
          <li>Co-produces sodium hydroxide and hydrogen</li>
          <li>Laboratory: reaction of HCl with MnO₂</li>
          <li>Small scale: electrolysis of seawater</li>
          <li>Purification by fractional distillation</li>
          <li>Storage as liquid under pressure</li>
          <li>Transportation in specialized containers</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default ChlorineExtractionSection;
