
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const FluorineCommercialUsesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Commercial Uses</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Fluoropolymers:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Teflon (PTFE) - non-stick cookware</li>
            <li>Chemical-resistant coatings</li>
            <li>Electrical insulation</li>
            <li>Medical implants and devices</li>
          </ul>
          <div><strong>Nuclear industry:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Uranium enrichment (UF₆ processing)</li>
            <li>Nuclear fuel preparation</li>
            <li>Isotope separation</li>
          </ul>
          <div><strong>Electronics:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Semiconductor manufacturing</li>
            <li>Plasma etching</li>
            <li>High-performance cables</li>
          </ul>
          <div><strong>Medical applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Dental health (fluoride in toothpaste)</li>
            <li>¹⁸F-PET imaging compounds</li>
            <li>Anesthetics (fluorinated)</li>
            <li>Pharmaceuticals</li>
          </ul>
          <div><strong>Other uses:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Rocket propellants as oxidizer</li>
            <li>Glass etching</li>
            <li>Fluorinated surfactants</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default FluorineCommercialUsesSection;
