
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NitrogenHistorySection: React.FC = () => (
  <Card className="my-4 border border-blue-200 dark:border-blue-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">History &amp; Discovery</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Discovery:</strong> Nitrogen was first identified as a component of air by Scottish physician Daniel Rutherford in 1772. Independently, Carl Wilhelm Scheele, Henry Cavendish, and Joseph Priestley also studied its properties around the same time.
      </div>
      <div>
        <strong>Etymology:</strong> The name "nitrogen" comes from the Greek "nitron" and "genes" ("nitre-forming"); named by French chemist Jean-Antoine Chaptal in 1790. In English, it is derived from “niter-giving”.
      </div>
      <div>
        <strong>Major milestones:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>1772: Rutherford describes "phlogisticated air" (now known as nitrogen) as non-life-sustaining</li>
          <li>18th-19th c.: Nitrogen recognized as distinct from oxygen and carbon dioxide in air</li>
          <li>Early 20th c.: Discovery of Haber-Bosch process to produce ammonia revolutionizes fertilizers and chemistry</li>
        </ul>
      </div>
      <div>
        <strong>Industrial significance:</strong> Nitrogen fixation crucial for agriculture; discovery of synthetic ammonia led to "green revolution".
      </div>
      <div className="mt-2 text-[11px] text-gray-500">
        Sources: Royal Society of Chemistry, Britannica, NobelPrize.org
      </div>
    </CardContent>
  </Card>
);

export default NitrogenHistorySection;
