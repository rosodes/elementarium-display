
import React from "react";
import { Element, ElementIsotope } from "../../data/elementTypes";
import { useLanguage } from "../../context/LanguageContext";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "../ui/table";
import { Sparkles } from "lucide-react";

interface Props {
  isotopes: ElementIsotope[];
  element: Element;
}

const ElementIsotopesTable: React.FC<Props> = ({ isotopes, element }) => {
  const { t } = useLanguage();

  return (
    <div className="my-3">
      <div className="flex items-center mb-2 text-lg font-medium">
        <Sparkles className="w-6 h-6 mr-2 text-blue-500" />
        {t.elementDetails?.isotopes || "Isotopes"}
      </div>
      <Table className="min-w-full bg-white/60 dark:bg-gray-900/60 shadow rounded-lg text-sm">
        <TableHeader>
          <TableRow>
            <TableHead>
              {t.elementDetails?.symbol || "Symbol"}
            </TableHead>
            <TableHead>
              {t.elementDetails?.abundance || "Natural abundance, %"}
            </TableHead>
            <TableHead>
              {t.elementDetails?.stability || "Stability"}
            </TableHead>
            <TableHead>
              {t.elementDetails?.funFacts || "Details"}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isotopes.map((iso, idx) => (
            <TableRow key={idx}>
              <TableCell>{iso.symbol}</TableCell>
              <TableCell>{typeof iso.abundance === "number" ? iso.abundance : "-"}</TableCell>
              <TableCell>
                {iso.stable === true
                  ? t.elementDetails?.yes || "Stable"
                  : t.elementDetails?.no || "Unstable"}
              </TableCell>
              <TableCell>{iso.comment || "\u2013"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ElementIsotopesTable;
