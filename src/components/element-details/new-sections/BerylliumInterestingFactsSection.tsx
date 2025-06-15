
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BerylliumInterestingFactsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Interesting Facts</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>One of the lightest metals, but also one of the strongest</li>
          <li>Transparent to X-rays - used in X-ray windows</li>
          <li>Has highest melting point among light metals</li>
          <li>Used in nuclear reactors as neutron moderator</li>
          <li>Beryl varieties include emerald and aquamarine gemstones</li>
          <li>Forms sweet-tasting compounds (hence old name "glucinium")</li>
          <li>Essential component in aerospace applications</li>
          <li>Has unique nuclear properties - low neutron absorption</li>
          <li>One of the first elements created in Big Bang nucleosynthesis</li>
          <li>More expensive than gold due to processing difficulty</li>
          <li>Non-magnetic and non-sparking properties</li>
          <li>Used in golf clubs and bicycle frames for strength</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default BerylliumInterestingFactsSection;
