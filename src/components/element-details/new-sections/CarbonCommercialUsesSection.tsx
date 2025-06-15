
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CarbonCommercialUsesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Commercial Uses</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Energy & Fuels:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Coal for electricity generation</li>
            <li>Petroleum products and gasoline</li>
            <li>Natural gas for heating and power</li>
            <li>Charcoal for metallurgy and cooking</li>
          </ul>
          <div><strong>Industrial applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Steel production (carbon content)</li>
            <li>Graphite electrodes for electric arc furnaces</li>
            <li>Carbon black for rubber reinforcement</li>
            <li>Activated carbon for purification</li>
          </ul>
          <div><strong>Advanced materials:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Carbon fiber composites for aerospace</li>
            <li>Graphene for electronics</li>
            <li>Carbon nanotubes for various applications</li>
            <li>Diamond tools and abrasives</li>
          </ul>
          <div><strong>Everyday uses:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Pencil graphite for writing</li>
            <li>Diamond jewelry and cutting tools</li>
            <li>Carbon filters for water treatment</li>
            <li>Organic compounds in plastics, medicines</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarbonCommercialUsesSection;
