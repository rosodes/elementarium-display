
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CopperCommercialUsesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Commercial Uses</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Electrical wiring and cables (~60% of use)</li>
        <li>Plumbing pipes and fittings</li>
        <li>Alloys: Bronze (Cu-Sn), Brass (Cu-Zn)</li>
        <li>Heat exchangers and radiators</li>
        <li>Roofing and architectural elements</li>
        <li>Electronics and computer components</li>
        <li>Antimicrobial surfaces in hospitals</li>
      </ul>
    </CardContent>
  </Card>
);

export default CopperCommercialUsesSection;
