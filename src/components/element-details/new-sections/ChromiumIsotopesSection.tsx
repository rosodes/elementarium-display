
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Изотопы хрома
const ChromiumIsotopesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Isotopes</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div>
        <strong>Natural chromium:</strong>
        <ul className="pl-4 list-disc">
          <li><b>Cr-52</b>: ~83.8%, stable</li>
          <li><b>Cr-53</b>: ~9.5%, stable</li>
          <li><b>Cr-54</b>: ~2.4%, stable</li>
          <li><b>Cr-50</b>: ~4.3%, stable</li>
        </ul>
        <div>Several radioactive artificial isotopes identified</div>
      </div>
    </CardContent>
  </Card>
);
export default ChromiumIsotopesSection;
