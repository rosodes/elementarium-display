
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

/**
 * Визуализация/фотографии водорода (иконка, цвет пламени, ссылки)
 */
const HydrogenVisualSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Visuals & Appearance</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Colorless, odorless gas (H₂) at room temperature</li>
          <li>Flame: almost invisible pale blue</li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Hydrogen#/media/File:Gas_burning_hydrogen.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-700"
            >
              Photo of hydrogen flame
            </a>
          </li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/File:Emission_spectrum-H.png"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-700"
            >
              Emission spectrum of hydrogen
            </a>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default HydrogenVisualSection;
