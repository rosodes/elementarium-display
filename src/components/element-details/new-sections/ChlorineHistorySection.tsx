
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ChlorineHistorySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Discovery & History</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Discovery:</strong> 1774 by Carl Wilhelm Scheele (Sweden)</div>
          <div><strong>Named:</strong> 1810 by Humphry Davy</div>
          <div><strong>Timeline:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>1630 - Van Helmont first described HCl gas</li>
            <li>1774 - Scheele produced chlorine from HCl and MnO₂</li>
            <li>1810 - Davy proved it was an element and named it</li>
            <li>1854 - First use as disinfectant during cholera outbreak</li>
            <li>1884 - Electrolytic production process developed</li>
            <li>1915 - First use as chemical weapon in WWI</li>
            <li>1928 - Introduction of chlorinated water treatment</li>
          </ul>
          <div><strong>Etymology:</strong> From Greek "chloros" meaning "pale green"</div>
          <div><strong>Early applications:</strong> Bleaching, disinfection</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChlorineHistorySection;
