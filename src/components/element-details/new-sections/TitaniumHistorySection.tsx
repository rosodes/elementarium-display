
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const TitaniumHistorySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Discovery & History</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Discovery:</strong> 1791 by William Gregor</div>
          <div><strong>Rediscovery:</strong> 1795 by Martin Heinrich Klaproth</div>
          <div><strong>First isolation:</strong> 1910 by Matthew A. Hunter</div>
          <div><strong>Timeline:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>1791 - Gregor found unknown element in ilmenite</li>
            <li>1795 - Klaproth independently discovered in rutile</li>
            <li>1795 - Named "titanium" after Greek Titans</li>
            <li>1910 - Hunter produced pure metal</li>
            <li>1940s - Kroll process developed for commercial production</li>
            <li>1950s - Aerospace applications begin</li>
            <li>1960s - Medical implant applications developed</li>
          </ul>
          <div><strong>Etymology:</strong> From Greek "Titanes" (Titans), mythological giants</div>
          <div><strong>Significance:</strong> Revolutionized aerospace and medical industries</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TitaniumHistorySection;
