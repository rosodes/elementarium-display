
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const LithiumExtractionSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Extraction & Production</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>From minerals:</strong> Crush, heat, then extract with acid or carbonate</div>
          <div><strong>From brine:</strong> Solar evaporation, then chemical conversion</div>
          <div><strong>Metallic lithium produced by:</strong> Electrolysis of LiCl or lithium carbonate</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LithiumExtractionSection;
