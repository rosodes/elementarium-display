
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NitrogenHistorySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Discovery & History</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Discovery:</strong> 1772 by Daniel Rutherford</div>
          <div><strong>Independent discovery:</strong> Carl Wilhelm Scheele, Henry Cavendish</div>
          <div><strong>Timeline:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>1772 - Rutherford isolated "noxious air" (nitrogen)</li>
            <li>1790 - Jean-Antoine Chaptal named it "nitrogen"</li>
            <li>1908 - Haber-Bosch process developed for ammonia</li>
            <li>1909 - Fritz Haber synthesized ammonia from nitrogen</li>
            <li>1920s - Industrial nitrogen fixation begins</li>
          </ul>
          <div><strong>Etymology:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>From Greek "nitron" (native soda) + "genes" (forming)</li>
            <li>Originally called "azote" (without life)</li>
            <li>German name "Stickstoff" (suffocating substance)</li>
          </ul>
          <div><strong>Key discoveries:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Nitrogen cycle understanding</li>
            <li>Nitrogen fixation by bacteria</li>
            <li>Industrial ammonia synthesis</li>
            <li>Role in explosives and fertilizers</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default NitrogenHistorySection;
