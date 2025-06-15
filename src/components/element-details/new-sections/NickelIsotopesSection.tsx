
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NickelIsotopesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Isotopes</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div>
        <strong>Natural nickel isotopes:</strong>
        <ul className="pl-4 list-disc">
          <li><b>Ni-58</b>: ~68.1%, stable</li>
          <li><b>Ni-60</b>: ~26.2%, stable</li>
          <li><b>Ni-61</b>: ~1.1%, stable</li>
          <li><b>Ni-62</b>: ~3.6%, stable</li>
          <li><b>Ni-64</b>: ~0.9%, stable</li>
        </ul>
        <div className="mt-2">Several radioactive isotopes, Ni-63 (100 years half-life) used in research</div>
      </div>
    </CardContent>
  </Card>
);

export default NickelIsotopesSection;
