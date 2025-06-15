
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const OxygenHistorySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Discovery & History</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Discovery:</strong> 1774 by Joseph Priestley</div>
          <div><strong>Independent discovery:</strong> Carl Wilhelm Scheele (1772)</div>
          <div><strong>Timeline:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>1772 - Scheele isolated "fire air" (oxygen)</li>
            <li>1774 - Priestley discovered "dephlogisticated air"</li>
            <li>1777 - Lavoisier named it "oxygen"</li>
            <li>1883 - Liquid oxygen first produced</li>
            <li>1895 - Ozone discovered in atmosphere</li>
          </ul>
          <div><strong>Etymology:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>From Greek "oxys" (acid) + "genes" (producer)</li>
            <li>Named by Antoine Lavoisier</li>
            <li>Originally thought all acids contained oxygen</li>
          </ul>
          <div><strong>Key discoveries:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Role in combustion and respiration</li>
            <li>Photosynthesis produces oxygen</li>
            <li>Ozone layer discovery</li>
            <li>Medical uses of oxygen therapy</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default OxygenHistorySection;
