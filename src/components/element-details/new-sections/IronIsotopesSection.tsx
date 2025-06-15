
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Изотопы железа
const IronIsotopesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Isotopes</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div>
        <strong>Natural iron isotopes:</strong>
        <ul className="pl-4 list-disc">
          <li><b>Fe-56</b>: 91.75%, stable (most stable nucleus)</li>
          <li><b>Fe-54</b>: 5.85%, stable</li>
          <li><b>Fe-57</b>: 2.12%, stable</li>
          <li><b>Fe-58</b>: 0.28%, stable</li>
        </ul>
        <div>Over 20 artificial radioactive isotopes known</div>
      </div>
    </CardContent>
  </Card>
);

export default IronIsotopesSection;
