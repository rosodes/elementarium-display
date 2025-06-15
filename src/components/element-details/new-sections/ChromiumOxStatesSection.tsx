
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Состояния окисления хрома
const ChromiumOxStatesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Oxidation States</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Main states: +3 (most stable), +2, +6</li>
        <li>Chromates (+6) and dichromates—strong oxidizers</li>
        <li>+3 state forms many colored compounds (green, violet)</li>
      </ul>
    </CardContent>
  </Card>
);
export default ChromiumOxStatesSection;
