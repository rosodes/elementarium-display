
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const HeliumCommercialUsesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Industrial & Everyday Uses</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Cryogenics: cooling superconducting magnets in MRI machines</li>
          <li>Breathing gas for deep-sea diving (mixed with oxygen)</li>
          <li>Protective atmosphere for welding reactive metals</li>
          <li>Pressurizing fuel tanks in rockets and spacecraft</li>
          <li>Party balloons and advertising blimps</li>
          <li>Scientific research requiring inert atmosphere</li>
          <li>Leak detection in high-vacuum systems</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default HeliumCommercialUsesSection;
