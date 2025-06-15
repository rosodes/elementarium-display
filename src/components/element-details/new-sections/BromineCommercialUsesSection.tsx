
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BromineCommercialUsesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Commercial Uses</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Flame retardants for plastics and textiles</li>
        <li>Agricultural fumigants (methyl bromide)</li>
        <li>Pharmaceutical intermediates and drugs</li>
        <li>Photography (silver bromide emulsions)</li>
        <li>Oil and gas drilling fluids</li>
        <li>Water treatment and disinfection</li>
        <li>Organic synthesis and chemical intermediates</li>
      </ul>
    </CardContent>
  </Card>
);

export default BromineCommercialUsesSection;
