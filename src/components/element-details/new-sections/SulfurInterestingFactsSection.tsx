
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SulfurInterestingFactsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Interesting Facts</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Forms rings and chains - most common is S₈ crown shape</li>
          <li>Has more allotropes than any other element</li>
          <li>Essential component of gunpowder (with charcoal and saltpeter)</li>
          <li>Vulcanization of rubber revolutionized tire industry</li>
          <li>Characteristic "rotten egg" smell of H₂S</li>
          <li>Burns with distinctive blue flame</li>
          <li>Essential for all living organisms</li>
          <li>Forms acid rain when burned (SO₂ + H₂O → H₂SO₃)</li>
          <li>Used in traditional medicine as "brimstone"</li>
          <li>Critical component of many antibiotics</li>
          <li>Can form spectacular yellow crystals</li>
          <li>Important in petroleum refining (desulfurization)</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default SulfurInterestingFactsSection;
