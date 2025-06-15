
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ChlorineHistorySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">History & Discovery</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li><strong>1774:</strong> First prepared by Carl Wilhelm Scheele</li>
          <li>Initially thought to be a compound containing oxygen</li>
          <li><strong>1810:</strong> Humphry Davy proved it was an element</li>
          <li>Named "chlorine" from Greek "chloros" (green-yellow)</li>
          <li><strong>1884:</strong> First used for water disinfection</li>
          <li><strong>WWI:</strong> Used as chemical weapon (chlorine gas)</li>
          <li><strong>1920s:</strong> Industrial production via electrolysis</li>
          <li>Ancient times: Salt (NaCl) known and used</li>
          <li>Medieval alchemy: Aqua regia contained HCl</li>
          <li>Modern era: Essential for public health and industry</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default ChlorineHistorySection;
