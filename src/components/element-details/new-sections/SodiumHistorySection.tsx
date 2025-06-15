
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SodiumHistorySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Discovery & History</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Discovery:</strong> 1807 by Humphry Davy (England)</div>
          <div><strong>Method:</strong> Electrolysis of molten sodium hydroxide</div>
          <div><strong>Timeline:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Ancient times - Salt (NaCl) used for preservation</li>
            <li>1736 - Duhamel du Monceau showed salt contains alkali</li>
            <li>1807 - Davy isolated metallic sodium by electrolysis</li>
            <li>1808 - First commercial production methods developed</li>
            <li>1886 - Castner process for sodium production</li>
            <li>1924 - Downs cell process developed</li>
          </ul>
          <div><strong>Etymology:</strong> From Arabic "suda" (headache remedy) via Latin "natrium"</div>
          <div><strong>Symbol origin:</strong> "Na" from Latin "natrium"</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SodiumHistorySection;
