
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NitrogenCommercialUsesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Commercial Uses</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Agriculture:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Ammonia-based fertilizers</li>
            <li>Nitrate fertilizers</li>
            <li>Soil enhancement and crop yields</li>
            <li>Nitrogen fixation enhancement</li>
          </ul>
          <div><strong>Industrial applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Inert atmosphere for chemical processes</li>
            <li>Metal heat treatment and annealing</li>
            <li>Electronics manufacturing</li>
            <li>Pharmaceutical production</li>
          </ul>
          <div><strong>Explosives and propellants:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>TNT and other military explosives</li>
            <li>Mining explosives</li>
            <li>Rocket propellants</li>
            <li>Airbag inflators</li>
          </ul>
          <div><strong>Everyday applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Food packaging (inert atmosphere)</li>
            <li>Tire inflation</li>
            <li>Liquid nitrogen for food preservation</li>
            <li>Medical applications (cryotherapy)</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default NitrogenCommercialUsesSection;
