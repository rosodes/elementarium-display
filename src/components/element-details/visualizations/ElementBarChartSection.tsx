
import React, { useMemo } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { Element } from "../../../data/elementTypes";
import { generateStableAbundanceData } from "../../../utils/chartDataGenerator";

interface ElementBarChartSectionProps {
  element: Element;
}

const ElementBarChartSection: React.FC<ElementBarChartSectionProps> = ({ element }) => {
  // Use memoized stable data
  const data = useMemo(() => {
    return generateStableAbundanceData(element);
  }, [element.atomic, element.abundance]);

  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">
          {element.name} in the Universe and on Earth
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        {data ? (
          <div className="w-full h-60">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 10, right: 30, left: 6, bottom: 8 }}>
                <CartesianGrid strokeDasharray="3 2" />
                <XAxis dataKey="env" tick={{ fontSize: 12 }} />
                <YAxis tickFormatter={v => `${v}%`} />
                <Tooltip formatter={(v) => [`${v}%`, "Abundance"]} />
                <Bar dataKey="percent">
                  {data.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="w-full h-60 flex justify-center items-center text-gray-400 dark:text-gray-500 text-xs">
            Нет данных для построения сравнительной диаграммы по {element.name}.
          </div>
        )}
        <div className="text-xs text-center mt-2 text-gray-600 dark:text-gray-300">
          {data
            ? <>{element.name} встречается по-разному в разных средах Вселенной!</>
            : <>Недостаточно данных для визуализации.</>
          }
        </div>
      </CardContent>
    </Card>
  );
};

export default ElementBarChartSection;
