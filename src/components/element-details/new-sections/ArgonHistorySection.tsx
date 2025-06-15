
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ArgonHistorySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Discovery & History</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Discovery:</strong> 1894 by Lord Rayleigh and William Ramsay</div>
          <div><strong>Method:</strong> Isolation from atmospheric nitrogen</div>
          <div><strong>Timeline:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>1785 - Henry Cavendish observed inert residue</li>
            <li>1894 - Rayleigh noticed density discrepancy in nitrogen</li>
            <li>1894 - Ramsay isolated the new gas</li>
            <li>1895 - Named "argon" meaning "inactive"</li>
            <li>1904 - Rayleigh and Ramsay won Nobel Prizes</li>
            <li>1957 - First argon lasers developed</li>
          </ul>
          <div><strong>Etymology:</strong> From Greek "argos" (inactive, lazy)</div>
          <div><strong>Significance:</strong> Led to discovery of noble gas family</div>
          <div><strong>Nobel recognition:</strong> Chemistry and Physics prizes for discovery</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArgonHistorySection;
