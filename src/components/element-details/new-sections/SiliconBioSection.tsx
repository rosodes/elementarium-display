
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SiliconBioSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Biological Role & Toxicity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Essential trace element for many plants and some animals.</li>
        <li>Important for bone formation, connective tissue, and growth in some higher animals.</li>
        <li>Silicon dioxide (inhaled as fine dust) can cause lung disease “silicosis” in humans.</li>
        <li>Not considered an essential nutrient for humans but present in many foods (cereal grains, vegetables).</li>
        <li>Low toxicity for most forms encountered in diet.</li>
        <li>Diatoms (microscopic algae) use silica to build their shells.</li>
        <li>Silicone implants: chemically inert, but rare allergic reactions possible.</li>
      </ul>
    </CardContent>
  </Card>
);

export default SiliconBioSection;
