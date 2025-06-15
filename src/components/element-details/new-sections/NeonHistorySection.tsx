
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NeonHistorySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Discovery & History</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Discovered:</strong> 1898 by William Ramsay and Morris Travers</div>
          <div><strong>Timeline:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>1898 - Discovered by fractional distillation of air</li>
            <li>1902 - First neon sign demonstrated</li>
            <li>1910 - Commercial neon lighting begins</li>
            <li>1915 - First neon advertising signs</li>
            <li>1930s - Widespread use in advertising</li>
            <li>1960s - Helium-neon lasers developed</li>
          </ul>
          <div><strong>Etymology:</strong> From Greek "neos" meaning "new"</div>
          <div><strong>Discovery method:</strong> Cryogenic distillation of liquid air</div>
          <div><strong>Recognition:</strong> Distinctive red-orange glow identified it</div>
          <div><strong>Early applications:</strong> Lighting, scientific instruments</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NeonHistorySection;
