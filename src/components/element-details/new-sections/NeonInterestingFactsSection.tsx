
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NeonInterestingFactsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Interesting Facts</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Produces famous orange-red glow in neon signs</li>
          <li>5th most abundant element in the universe</li>
          <li>Only about 18 parts per million in Earth's atmosphere</li>
          <li>Completely chemically inert - forms no compounds</li>
          <li>Liquid neon is an even more powerful refrigerant than liquid helium</li>
          <li>Neon gas glows brightly when electricity passes through it</li>
          <li>Used in vacuum tubes before transistors</li>
          <li>Has no biological role whatsoever</li>
          <li>More expensive than liquid helium due to rarity</li>
          <li>Las Vegas is famous for its neon signs</li>
          <li>Can be used as cryogenic refrigerant</li>
          <li>Warning lights often contain neon gas</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default NeonInterestingFactsSection;
