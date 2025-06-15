
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const HeliumNaturalOccurrenceSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Natural Occurrence</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Second most abundant element in the universe (~24% by mass)</li>
          <li>Very rare on Earth due to low atomic mass (escapes to space)</li>
          <li>Found in natural gas deposits (up to 7% in some wells)</li>
          <li>Produced by radioactive decay of heavy elements</li>
          <li>Present in Earth's atmosphere at only 5.2 ppm</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default HeliumNaturalOccurrenceSection;
