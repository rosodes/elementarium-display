
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CobaltInterestingFactsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Interesting Facts</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Essential trace element for humans (vitamin B12)</li>
          <li>Ferromagnetic like iron and nickel</li>
          <li>Creates the most intense blue color in ceramics</li>
          <li>Critical material for electric vehicle batteries</li>
          <li>Used in artificial hip and knee joints</li>
          <li>Co-60 sterilizes medical equipment worldwide</li>
          <li>Enables high-temperature jet engine alloys</li>
          <li>Can cause "hard metal disease" in workers</li>
          <li>Essential for nitrogen fixation in some bacteria</li>
          <li>Future supply concerns due to geopolitical issues</li>
          <li>Superalloys contain up to 20% cobalt</li>
          <li>Astronomical spectra show cobalt in stars</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default CobaltInterestingFactsSection;
