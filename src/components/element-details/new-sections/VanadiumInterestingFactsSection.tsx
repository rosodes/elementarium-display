
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Интересные факты о ванадии
const VanadiumInterestingFactsSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Interesting Facts</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Vanadium compounds are used as catalysts and in producing colored glass and ceramics</li>
        <li>Essential trace element for some living organisms</li>
        <li>Strengthens steel alloys and makes them more shock-resistant</li>
        <li>Colorful ions: +5 (yellow), +4 (blue), +3 (green), +2 (violet)</li>
      </ul>
    </CardContent>
  </Card>
);

export default VanadiumInterestingFactsSection;
