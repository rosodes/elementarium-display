
import React from "react";
import { Element, ElementIsotope } from "../../data/elementTypes";
import { useLanguage } from "../../context/LanguageContext";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

interface Props {
  element: Element;
}

const ElementIsotopesSection: React.FC<Props> = ({ element }) => {
  const { t } = useLanguage();

  const isotopes = element.isotopesDetailed;

  if (!isotopes || isotopes.length === 0) {
    return (
      <div className="p-4 text-sm text-gray-500 italic">
        {t.elementDetails?.notAvailable || "Данные об изотопах не указаны"}
      </div>
    );
  }

  return (
    <div className="my-6">
      <h3 className="text-xl font-bold mb-4">{t.elementDetails?.isotopes || "Изотопы"}</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{t.elementDetails?.symbol || "Изотоп"}</TableHead>
            <TableHead>{t.elementDetails?.abundance || "Доля (%)"}</TableHead>
            <TableHead>{t.elementDetails?.properties || "Стабильность"}</TableHead>
            <TableHead>{t.elementDetails?.additionalInfo || "Примечание"}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isotopes.map((iso) => (
            <TableRow key={iso.symbol}>
              <TableCell>{iso.symbol}</TableCell>
              <TableCell>
                {iso.abundance !== undefined ? iso.abundance.toLocaleString("ru-RU", { maximumFractionDigits: 2 }) : "—"}
              </TableCell>
              <TableCell>
                {iso.stable ? (
                  <span className="text-green-600 dark:text-green-400">Стабильный</span>
                ) : (
                  <span className="text-red-600 dark:text-red-400">Радиоактивный</span>
                )}
              </TableCell>
              <TableCell>{iso.comment || "—"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ElementIsotopesSection;
