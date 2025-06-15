import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BoronHistorySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Discovery & History</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Discovery:</strong> Isolated as an element in 1808 by Sir Humphry Davy (UK) and independently, by Joseph Louis Gay-Lussac & Louis Jacques Thénard (France).</div>
          <div><strong>History:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Ancient: borax known in Egypt, Persia, China for glassmaking and metallurgy</li>
            <li>Middle Ages: boron compounds (borax) used as fluxes for soldering/goldsmithing</li>
            <li>19th century: boron studied for unique chemistry—electron deficiency, cluster compounds</li>
            <li>20th century: boron chemistry explodes—boranes, superhard ceramics, nuclear uses</li>
          </ul>
          <div><strong>Etymology:</strong> Name from Arabic "buraq" (borax); symbol "B" from Latin boracium.</div>
          <div><strong>Modern advances:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Boron fibers and ceramics in aerospace (since 1950s)</li>
            <li>Boron neutron capture therapy for cancer (since 1970s)</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default BoronHistorySection;
