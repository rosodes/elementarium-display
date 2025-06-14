
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

/**
 * Кристаллическая решётка водорода
 */
const HydrogenCrystalStructureSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Crystal Structure</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <p>
          At standard conditions hydrogen is a diatomic gas (H₂). <br />
          Solid hydrogen forms below 14 K and has a <b>hexagonal close-packed (hcp)</b> structure.<br />
          Under extreme pressure it may become metallic hydrogen (research ongoing).
        </p>
      </CardContent>
    </Card>
  );
};

export default HydrogenCrystalStructureSection;
