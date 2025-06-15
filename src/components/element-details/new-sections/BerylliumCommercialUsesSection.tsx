
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BerylliumCommercialUsesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Commercial Uses</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Aerospace & Defense:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Aircraft and spacecraft structural components</li>
            <li>Missile guidance systems</li>
            <li>Satellite components</li>
            <li>Nuclear weapon components</li>
          </ul>
          <div><strong>Electronics:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Computer heat sinks</li>
            <li>Electrical contacts and connectors</li>
            <li>Microwave components</li>
            <li>Cell phone components</li>
          </ul>
          <div><strong>Nuclear applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Neutron reflector in reactors</li>
            <li>Neutron source materials</li>
            <li>Nuclear fuel cladding</li>
          </ul>
          <div><strong>Other applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>X-ray windows in medical equipment</li>
            <li>High-performance alloys</li>
            <li>Precision instruments</li>
            <li>Sports equipment (golf clubs)</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default BerylliumCommercialUsesSection;
