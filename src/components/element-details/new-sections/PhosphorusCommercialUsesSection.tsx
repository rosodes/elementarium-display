
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const PhosphorusCommercialUsesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Commercial Uses</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Fertilizers (85% of production):</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Superphosphate and diammonium phosphate</li>
            <li>Essential nutrient for plant growth</li>
          </ul>
          <div><strong>Industrial chemicals:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Phosphoric acid production</li>
            <li>Detergent phosphates (being phased out)</li>
            <li>Water treatment chemicals</li>
            <li>Food additives and preservatives</li>
          </ul>
          <div><strong>Specialty applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Safety matches (red phosphorus)</li>
            <li>Flame retardants</li>
            <li>Pesticides and rodenticides</li>
            <li>Steel production (deoxidizer)</li>
            <li>Semiconductor dopant</li>
            <li>Incendiary weapons (white phosphorus)</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default PhosphorusCommercialUsesSection;
