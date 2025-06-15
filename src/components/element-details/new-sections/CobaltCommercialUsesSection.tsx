
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CobaltCommercialUsesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Commercial Uses</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Rechargeable batteries (lithium-ion, ~40% of use)</li>
        <li>Superalloys for jet engines and gas turbines</li>
        <li>Catalysts in petroleum refining</li>
        <li>Permanent magnets and magnetic recording</li>
        <li>Cemented carbides and cutting tools</li>
        <li>Blue pigments in ceramics and glass</li>
        <li>Medical implants and dental prosthetics</li>
      </ul>
    </CardContent>
  </Card>
);

export default CobaltCommercialUsesSection;
