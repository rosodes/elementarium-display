
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const HeliumReactivitySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Completely inert under normal conditions</li>
          <li>No known stable compounds exist</li>
          <li>Does not react with any other elements</li>
          <li>Highest ionization energy of all elements</li>
          <li>Does not form molecules - exists as single atoms</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default HeliumReactivitySection;
