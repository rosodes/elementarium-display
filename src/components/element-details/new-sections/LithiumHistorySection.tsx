
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

/** История открытия и этимология */
const LithiumHistorySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Discovery & History</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs space-y-2">
        <div>
          <strong>Discovered:</strong> 1817 by Johan August Arfvedson (Sweden) while analyzing petalite mineral (LiAlSi₄O₁₀).
        </div>
        <div>
          <strong>First isolated:</strong> 1821 by William Thomas Brande and Sir Humphry Davy (UK), via electrolysis of lithium oxide (Li₂O).
        </div>
        <div>
          <strong>Name origin:</strong> From Greek "lithos" (&quot;stone&quot;), as it was found in minerals, unlike sodium (&quot;soda&quot;) and potassium (&quot;potash&quot;).
        </div>
        <div>
          <b>Fun fact:</b> First alkali metal discovered from mineral sources, not plants!
        </div>
        <div className="text-xs text-gray-500">
          19th century: Used mainly in psychiatry and by glassmakers; Lithium batteries and nuclear uses came later (20th century).
        </div>
      </CardContent>
    </Card>
  );
};
export default LithiumHistorySection;
