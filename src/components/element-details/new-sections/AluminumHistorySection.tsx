
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const AluminumHistorySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Discovery & History</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Discovery:</strong> 1825 by Hans Christian Ørsted (Denmark)</div>
          <div><strong>First isolation:</strong> 1827 by Friedrich Wöhler (Germany)</div>
          <div><strong>Timeline:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>1761 - Guyton de Morveau proposed "alumine" for alumina</li>
            <li>1807 - Humphry Davy attempted isolation</li>
            <li>1825 - Ørsted first produced aluminum metal</li>
            <li>1845 - Wöhler improved production method</li>
            <li>1854 - Henri Sainte-Claire Deville scaled up production</li>
            <li>1886 - Hall-Héroult process developed</li>
            <li>1889 - First commercial aluminum production</li>
          </ul>
          <div><strong>Etymology:</strong> From Latin "alumen" (alum)</div>
          <div><strong>Early value:</strong> More precious than gold until mass production</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AluminumHistorySection;
