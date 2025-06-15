
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const MagnesiumSafetySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Safety & Precautions</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Fire hazards:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Magnesium powder is highly flammable</li>
            <li>Burns at extremely high temperature (3,100°C)</li>
            <li>Cannot be extinguished with water (produces hydrogen)</li>
            <li>Use Class D fire extinguisher or sand to smother flames</li>
          </ul>
          <div><strong>Health considerations:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Generally non-toxic in metallic form</li>
            <li>Inhalation of fine powder can cause respiratory irritation</li>
            <li>Essential mineral - deficiency causes health problems</li>
            <li>Excessive intake can cause diarrhea and kidney problems</li>
          </ul>
          <div><strong>Handling precautions:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Store powder in dry, inert atmosphere</li>
            <li>Avoid contact with acids and oxidizing agents</li>
            <li>Use proper ventilation when machining</li>
            <li>Wear protective equipment when handling powder</li>
          </ul>
          <div><strong>Environmental impact:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Not considered environmental hazard</li>
            <li>Essential for plant growth and photosynthesis</li>
            <li>Readily biodegradable in natural environment</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default MagnesiumSafetySection;
