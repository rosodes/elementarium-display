
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NeonReactivitySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Completely chemically inert under normal conditions</li>
          <li>No known stable chemical compounds</li>
          <li>Does not react with any elements or compounds</li>
          <li>Extremely high ionization energy prevents reactions</li>
          <li>Complete outer electron shell provides stability</li>
          <li>Cannot form ionic or covalent bonds</li>
          <li>Exists only as monatomic gas molecules</li>
          <li>Used as inert atmosphere for sensitive processes</li>
          <li>No chemical role in biological systems</li>
          <li>Stable under all environmental conditions</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default NeonReactivitySection;
