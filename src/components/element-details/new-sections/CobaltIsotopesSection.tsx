
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CobaltIsotopesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Isotopes</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div>
        <strong>Natural cobalt isotopes:</strong>
        <ul className="pl-4 list-disc">
          <li><b>Co-59</b>: 100%, stable (only stable isotope)</li>
        </ul>
        <div className="mt-2"><strong>Important artificial isotopes:</strong></div>
        <ul className="pl-4 list-disc">
          <li><b>Co-60</b>: 5.27 years half-life, gamma emitter</li>
          <li><b>Co-57</b>: 271.8 days half-life</li>
          <li><b>Co-58</b>: 70.86 days half-life</li>
        </ul>
        <div className="mt-2">Co-60 widely used in medical treatments and industrial radiography</div>
      </div>
    </CardContent>
  </Card>
);

export default CobaltIsotopesSection;
