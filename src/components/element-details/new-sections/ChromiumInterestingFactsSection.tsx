
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Интересные факты о хроме
const ChromiumInterestingFactsSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Interesting Facts</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Chromium gives rubies and emeralds their color</li>
        <li>Used for chrome plating (shiny surfaces, corrosion resistance)</li>
        <li>Essential trace element for animals (metabolism)</li>
        <li>Compounds widely used as pigments (lead chromate—chrome yellow)</li>
      </ul>
    </CardContent>
  </Card>
);
export default ChromiumInterestingFactsSection;
