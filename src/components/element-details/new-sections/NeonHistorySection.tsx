
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
          <div><strong>Discovery:</strong> 1898 by William Ramsay and Morris Travers</div>
          <div><strong>Timeline:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>1898 - Discovered through fractional distillation of liquid air</li>
            <li>1902 - First neon sign demonstrated</li>
            <li>1910 - First commercial neon lighting</li>
            <li>1912 - Neon signs introduced to United States</li>
            <li>1920s - Widespread adoption of neon advertising</li>
          </ul>
          <div><strong>Etymology:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>From Greek "neos" meaning "new"</li>
            <li>Named for its novelty when discovered</li>
            <li>Found as new component in liquid air</li>
          </ul>
          <div><strong>Key developments:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Development of neon tube technology</li>
            <li>Noble gas family identification</li>
            <li>Industrial gas separation techniques</li>
            <li>Applications in scientific instruments</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default NeonHistorySection;
