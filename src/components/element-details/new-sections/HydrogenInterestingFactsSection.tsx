
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

/**
 * Интересные факты о водороде
 */
const HydrogenInterestingFactsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Interesting Facts</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>
            Hydrogen is the most abundant element in the universe (about 75% of normal matter by mass).
          </li>
          <li>
            Stars, including the Sun, are composed mainly of hydrogen undergoing nuclear fusion.
          </li>
          <li>
            The only element where the most common isotope has no neutrons (protium: ¹H).
          </li>
          <li>
            Hydrogen gas fueled the first balloons and airships (e.g., Hindenburg — which tragically exploded).
          </li>
          <li>
            Used in quantum mechanics as the standard model for the atom (Balmer and Lyman spectral series).
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default HydrogenInterestingFactsSection;
