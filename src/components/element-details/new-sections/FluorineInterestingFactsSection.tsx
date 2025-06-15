
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const FluorineInterestingFactsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Interesting Facts</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Most electronegative and reactive element on the periodic table</li>
          <li>Pale yellow gas that glows faintly in the dark</li>
          <li>Forms the strongest single bond with carbon (C-F bond)</li>
          <li>Can make compounds with noble gas xenon</li>
          <li>Essential for dental health in small amounts</li>
          <li>Teflon contains fluorine and is extremely non-stick</li>
          <li>Used in atomic bomb production (uranium enrichment)</li>
          <li>Fluorinated compounds are often very stable</li>
          <li>Can etch glass and attack most materials</li>
          <li>Stored in special nickel or Monel containers</li>
          <li>Creates ozone holes when released as CFCs</li>
          <li>So reactive it was nicknamed "the tiger of chemistry"</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default FluorineInterestingFactsSection;
