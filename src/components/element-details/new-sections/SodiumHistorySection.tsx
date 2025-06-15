
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SodiumHistorySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Discovery & History</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div className="space-y-2">
        <div><strong>Discovery:</strong> 1807 by Sir Humphry Davy (England)</div>
        <div><strong>Method:</strong> Electrolysis of molten sodium hydroxide (NaOH).</div>
        <div className="space-y-1">
          <div><strong>Timeline:</strong></div>
          <ul className="list-disc pl-4">
            <li>Ancient times: Known as part of "natron" and "salt".</li>
            <li>Early 18th century: Increasing study of alkalis.</li>
            <li>1807: Davy separated metallic sodium using voltaic pile.</li>
            <li>19th–20th c.: Used in chemistry, industry (e.g. soda production).</li>
          </ul>
        </div>
        <div><strong>Etymology:</strong> "Sodium" from "soda"; symbol "Na" from "natrium" (Latinized Arabic "natrun").</div>
        <div><strong>Fun fact:</strong> Pure sodium is not found naturally due to high reactivity!</div>
      </div>
    </CardContent>
  </Card>
);

export default SodiumHistorySection;
