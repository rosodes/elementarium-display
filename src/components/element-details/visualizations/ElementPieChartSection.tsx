
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Element } from "../../../data/elementTypes";

interface ElementPieChartSectionProps {
  element: Element;
}

const getPieChartData = (element: Element) => {
  // Унифицированные mock-данные — можно расширять, если появятся реальные данные из element.abundance
  if (!element.abundance || !element.abundance.human) return null;
  // Пример: строим диаграмму по распространённости элемента в теле человека в % и "Other"
  const value = typeof element.abundance.human === "number" ? element.abundance.human : parseFloat(element.abundance.human);
  if (isNaN(value) || value <= 0) return null;
  return [
    { name: `${element.name} (${element.symbol})`, value: value, color: "#60a5fa" },
    { name: "Other", value: 100 - value, color: "#a1a1aa" }
  ];
};

const COLORS = ["#60a5fa", "#a1a1aa"];

const ElementPieChartSection: React.FC<ElementPieChartSectionProps> = ({ element }) => {
  const data = getPieChartData(element);

  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">
          {element.name} in the Human Body
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        {data ? (
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={38}
                  outerRadius={70}
                  fill="#60a5fa"
                  paddingAngle={2}
                  label={({ name, percent }) =>
                    percent > 0.1 ? `${name.split(" ")[0]} ${(percent * 100).toFixed(0)}%` : ""
                  }
                >
                  {data.map((entry, idx) => (
                    <Cell key={`cell-${idx}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(v, n) => [`${v}%`, n]} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="h-56 flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 text-xs">
            Нет данных о {element.name} в человеческом теле.
          </div>
        )}
        <div className="mt-3 text-xs text-gray-700 dark:text-gray-300 text-center">
          {data
            ? <>Did you know? {element.name} составляет примерно <b>{data[0].value}%</b> от массы человеческого тела (если учитывать).</>
            : <>Недостаточно данных для построения диаграммы.</>
          }
        </div>
      </CardContent>
    </Card>
  );
};

export default ElementPieChartSection;
