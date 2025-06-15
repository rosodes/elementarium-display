
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NitrogenSafetySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Safety Information</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Nitrogen gas hazards:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Asphyxiant - displaces oxygen in confined spaces</li>
            <li>Nitrogen narcosis in diving (pressure-related intoxication)</li>
            <li>Rapid decompression hazard with compressed gas</li>
            <li>Generally non-toxic but can cause suffocation</li>
          </ul>
          <div><strong>Liquid nitrogen hazards:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Extreme cold burns (-196°C)</li>
            <li>Rapid expansion can cause pressure buildup</li>
            <li>Oxygen displacement in confined areas</li>
            <li>Eye and respiratory tract damage from vapor</li>
          </ul>
          <div><strong>Nitrogen compounds hazards:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Ammonia is corrosive and toxic</li>
            <li>Nitrogen oxides are toxic and corrosive</li>
            <li>Nitrates can be explosive</li>
            <li>Organic nitrogen compounds may be carcinogenic</li>
          </ul>
          <div><strong>Safety precautions:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Ensure adequate ventilation when using nitrogen gas</li>
            <li>Use protective equipment with liquid nitrogen</li>
            <li>Oxygen monitoring in confined spaces</li>
            <li>Proper storage and handling of compressed gases</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default NitrogenSafetySection;
