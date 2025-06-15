
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SiliconCommercialUsesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Commercial Uses</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Electronics: microprocessors, memory chips, transistors</li>
          <li>Solar panels: photovoltaic cells for renewable energy</li>
          <li>Steel industry: deoxidizing agent, improves strength</li>
          <li>Aluminum alloys: increases strength and corrosion resistance</li>
          <li>Silicones: polymers for sealants, lubricants, medical implants</li>
          <li>Glass production: silica as primary component</li>
          <li>Concrete and ceramics: silicon compounds as binders</li>
          <li>Abrasives: silicon carbide for cutting and grinding</li>
          <li>Fiber optics: ultra-pure silica for light transmission</li>
          <li>Chemical industry: catalyst supports and reactive intermediates</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default SiliconCommercialUsesSection;
