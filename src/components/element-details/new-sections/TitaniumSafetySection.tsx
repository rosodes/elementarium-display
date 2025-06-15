
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const TitaniumSafetySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Safety & Precautions</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Physical hazards:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Metal dust is flammable and explosive</li>
            <li>Can ignite spontaneously in fine particle form</li>
            <li>Burns with intense white flame</li>
            <li>Proper storage and handling required</li>
          </ul>
          <div><strong>Health considerations:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Metallic titanium is biologically inert</li>
            <li>Excellent biocompatibility</li>
            <li>No known toxicity in bulk form</li>
            <li>Dust may cause respiratory irritation</li>
          </ul>
          <div><strong>Compound safety:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>TiO₂ considered safe (food grade)</li>
            <li>TiCl₄ is highly corrosive and toxic</li>
            <li>Some organotitanium compounds are harmful</li>
            <li>Proper ventilation for compound handling</li>
          </ul>
          <div><strong>Industrial safety:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Fire suppression systems for machining</li>
            <li>Proper grounding for static electricity</li>
            <li>Personal protective equipment mandatory</li>
            <li>Regular air quality monitoring</li>
          </ul>
          <div><strong>Medical safety:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Excellent track record in implants</li>
            <li>No allergic reactions reported</li>
            <li>Long-term biocompatibility proven</li>
            <li>MRI safe for medical implants</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default TitaniumSafetySection;
