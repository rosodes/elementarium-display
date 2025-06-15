
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const AluminumInterestingFactsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Interesting Facts</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>
            Once more valuable than gold - Napoleon III used aluminum cutlery for special guests
          </li>
          <li>
            The top of the Washington Monument is capped with aluminum (1884)
          </li>
          <li>
            Infinitely recyclable - recycling uses 95% less energy than primary production
          </li>
          <li>
            Forms protective oxide layer in 0.001 seconds when exposed to air
          </li>
          <li>
            Used in thermite welding - can reach temperatures of 2500°C
          </li>
          <li>
            Excellent electrical conductor (61% conductivity of copper) but lighter
          </li>
          <li>
            Reflects 92% of visible light, making it ideal for mirrors and reflectors
          </li>
          <li>
            Non-magnetic and non-sparking, important for safety applications
          </li>
          <li>
            Can be made stronger than steel through alloying
          </li>
          <li>
            The human body contains about 60-70 mg of aluminum
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default AluminumInterestingFactsSection;
