
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const AluminumCommercialUsesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Commercial Uses</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Transportation industry:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Aircraft and spacecraft construction</li>
            <li>Automotive parts and bodies</li>
            <li>Ships and marine applications</li>
            <li>Railway cars and components</li>
          </ul>
          <div><strong>Construction and architecture:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Window frames and doors</li>
            <li>Roofing and siding materials</li>
            <li>Structural components</li>
            <li>Decorative elements</li>
          </ul>
          <div><strong>Packaging industry:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Beverage cans and food containers</li>
            <li>Aluminum foil and flexible packaging</li>
            <li>Aerosol cans and closures</li>
          </ul>
          <div><strong>Electrical applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Power transmission lines</li>
            <li>Electrical conductors and cables</li>
            <li>Heat sinks and electronic housings</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default AluminumCommercialUsesSection;
