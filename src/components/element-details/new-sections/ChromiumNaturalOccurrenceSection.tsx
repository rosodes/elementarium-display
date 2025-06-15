
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Природная встречаемость хрома
const ChromiumNaturalOccurrenceSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Natural Occurrence</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div>
        <ul className="pl-4 list-disc space-y-1">
          <li>Main ore: Chromite (FeCr₂O₄)</li>
          <li>Mostly found in South Africa, Kazakhstan, India</li>
          <li>Not found free in nature</li>
        </ul>
      </div>
    </CardContent>
  </Card>
);
export default ChromiumNaturalOccurrenceSection;
