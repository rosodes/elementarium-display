
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Состояния окисления марганца
const ManganeseOxStatesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Oxidation States</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Common states: +2, +3, +4, +6, +7</li>
        <li>Most stable: +2 (pink/pale pink solutions)</li>
        <li>+7 state in permanganates—strong oxidizing agents</li>
        <li>+4 state in MnO₂ (manganese dioxide)</li>
      </ul>
    </CardContent>
  </Card>
);
export default ManganeseOxStatesSection;
