
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const HeliumHistorySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">History & Discovery</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs space-y-2">
        <ul className="list-disc pl-4 space-y-1">
          <li>
            <b>1868, Sun:</b> French astronomer Pierre Janssen and English scientist Joseph Norman Lockyer independently observed a new yellow line ("D₃") in the solar spectrum during a total solar eclipse. Lockyer named the new element “helium” (from Greek <i>helios</i>, "Sun").
          </li>
          <li>
            <b>Helium was the first element discovered extra-terrestrially before being found on Earth!</b>
          </li>
          <li>
            <b>1895, Earth:</b> Sir William Ramsay (UK) isolated helium gas from cleveite, a uranium mineral. Concurrently, Per Teodor Cleve and Abraham Langlet (Sweden) identified it in U ores in Uppsala.
          </li>
          <li>
            <b>1903</b>: Large He concentrations discovered in Kansas natural gas fields; commercial exploitation starts in the U.S.
          </li>
          <li>
            <b>1917:</b> Ernest Rutherford and Thomas Royds showed alpha particles were nuclei of helium.
          </li>
        </ul>
        <div className="mt-2 text-xs text-gray-500">
          <b>Fun facts:</b> The existence of helium explained why the Sun's observed spectrum could not be matched to Earthly elements; helium quickly became important for airships and scientific technology.
        </div>
      </CardContent>
    </Card>
  );
};
export default HeliumHistorySection;
