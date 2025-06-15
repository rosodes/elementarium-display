
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BoronIsotopesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Isotopes</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Stable isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>¹⁰B (19.9% abundance) - high neutron absorption</li>
            <li>¹¹B (80.1% abundance) - most common isotope</li>
          </ul>
          <div><strong>Important properties:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>¹⁰B has very high thermal neutron cross-section</li>
            <li>¹¹B used in NMR spectroscopy</li>
            <li>Isotope separation important for nuclear applications</li>
          </ul>
          <div><strong>Applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>¹⁰B in neutron detection and shielding</li>
            <li>¹⁰B in boron neutron capture therapy (BNCT)</li>
            <li>¹¹B in nuclear fusion research</li>
            <li>Both isotopes in borosilicate glass</li>
          </ul>
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            Boron-10 is crucial for nuclear reactor control rods.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BoronIsotopesSection;
