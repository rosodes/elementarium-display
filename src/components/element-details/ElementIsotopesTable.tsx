
import React from "react";
import { Element, ElementIsotope } from "../../data/elementTypes";
import { useLanguage } from "../../context/LanguageContext";
import { Table, Tbody, Td, Th, Thead, Tr } from "../ui/table";
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
        <Thead>
          <Tr>
            <Th>
              {t.elementDetails?.symbol || "Symbol"}
            </Th>
            <Th>
              {t.elementDetails?.abundance || "Natural abundance, %"}
            </Th>
            <Th>
              {t.elementDetails?.stability || "Stability"}
            </Th>
            <Th>
              {t.elementDetails?.funFacts || "Details"}
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {isotopes.map((iso, idx) => (
            <Tr key={idx}>
              <Td>{iso.symbol}</Td>
              <Td>{typeof iso.abundance === "number" ? iso.abundance : "-"}</Td>
              <Td>
                {iso.stable === true
                  ? t.elementDetails?.yes || "Stable"
                  : t.elementDetails?.no || "Unstable"}
              </Td>
              <Td>{iso.comment || "\u2013"}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default ElementIsotopesTable;
