
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SodiumSafetySection: React.FC = () => (
  <Card className="my-4 border border-yellow-200 dark:border-yellow-700">
    <CardHeader className="bg-yellow-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Safety & Precautions</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div className="space-y-2">
        <div><strong>Hazards:</strong></div>
        <ul className="list-disc pl-4">
          <li>Highly reactive with water — may cause dangerous fires or explosions</li>
          <li>Reacts with acids and oxidizers</li>
          <li>Contact with skin/tissue causes severe burns</li>
          <li>Sodium hydroxide (from reaction) is highly caustic</li>
        </ul>
        <div><strong>Handling:</strong></div>
        <ul className="list-disc pl-4">
          <li>Store under oil or inert gas</li>
          <li>Wear protective gloves, goggles, and lab coat</li>
          <li>Keep away from moisture and acids</li>
          <li>Do NOT touch with bare hands</li>
        </ul>
        <div><strong>First aid:</strong> Rinse affected area with water (if no active sodium present), seek medical attention immediately. Inhalation/consumption of vapors requires emergency support.</div>
      </div>
    </CardContent>
  </Card>
);

export default SodiumSafetySection;
