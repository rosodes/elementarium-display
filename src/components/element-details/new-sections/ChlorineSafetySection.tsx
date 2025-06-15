
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ChlorineSafetySection: React.FC = () => {
  return (
    <Card className="my-4 border border-red-200 dark:border-red-700">
      <CardHeader className="bg-red-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Safety & Health</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Health hazards:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Highly toxic gas - causes severe respiratory irritation</li>
            <li>Corrosive to eyes, skin, and mucous membranes</li>
            <li>Can cause chemical burns and lung damage</li>
            <li>Potentially fatal in high concentrations</li>
          </ul>
          <div><strong>Exposure limits:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>OSHA PEL: 1 ppm (ceiling limit)</li>
            <li>NIOSH REL: 0.5 ppm (15-minute ceiling)</li>
            <li>Immediately dangerous: 10 ppm</li>
          </ul>
          <div><strong>Safety measures:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Use in well-ventilated areas only</li>
            <li>Proper respiratory protection required</li>
            <li>Emergency shower and eyewash stations</li>
            <li>Gas detection and alarm systems</li>
            <li>Never mix with ammonia or hydrogen peroxide</li>
          </ul>
          <div><strong>Environmental concerns:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Chlorinated compounds can persist in environment</li>
            <li>Some chlorine compounds deplete ozone layer</li>
            <li>Chlorinated water produces trihalomethanes</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChlorineSafetySection;
