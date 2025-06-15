
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const OxygenInterestingFactsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Interesting Facts</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Essential for all aerobic life - humans can survive only minutes without it</li>
          <li>Most abundant element in Earth's crust and human body (65% by mass)</li>
          <li>Liquid oxygen is pale blue and magnetic (paramagnetic)</li>
          <li>Ozone layer protects Earth from harmful UV radiation</li>
          <li>Great Oxidation Event 2.4 billion years ago changed Earth's atmosphere</li>
          <li>Oxygen is produced by photosynthesis in plants and algae</li>
          <li>Pure oxygen can be toxic at high concentrations (oxygen toxicity)</li>
          <li>Oxygen-16 is used as the standard for atomic mass units</li>
          <li>Molecular oxygen (O₂) has a triplet ground state</li>
          <li>Oxygen supports combustion but is not flammable itself</li>
          <li>Used in rocket engines as oxidizer for fuel combustion</li>
          <li>Dissolved oxygen levels indicate water quality in aquatic ecosystems</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default OxygenInterestingFactsSection;
