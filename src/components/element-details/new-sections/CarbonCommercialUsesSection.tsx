
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
          <div><strong>Diamond applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Jewelry and gemstones (60% of market)</li>
            <li>Industrial cutting tools and drill bits</li>
            <li>Abrasives and polishing compounds</li>
            <li>Heat sinks in electronics</li>
          </ul>
          <div><strong>Graphite uses:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Lithium-ion battery anodes</li>
            <li>Steel production (electrodes)</li>
            <li>Lubricants and pencils</li>
            <li>Nuclear reactor moderators</li>
          </ul>
          <div><strong>Carbon materials:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Carbon fiber in aerospace and automotive</li>
            <li>Activated carbon for filtration</li>
            <li>Carbon black in tires and pigments</li>
            <li>Graphene in electronics research</li>
          </ul>
          <div><strong>Energy sector:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Coal for electricity generation</li>
            <li>Coke for steel production</li>
            <li>Carbon capture and storage technologies</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarbonCommercialUsesSection;
