
import { useLanguage } from "../../context/LanguageContext";
import { Separator } from "@/components/ui/separator";

const ElementPageFooter = () => {
  const { t } = useLanguage();
  return (
    <footer
      className="w-full py-6 px-4 md:px-10 text-xs text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-8"
      role="contentinfo"
      aria-label={t.footer?.credits}
      tabIndex={0}
    >
      <Separator />
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 pt-4">
        <span className="mb-1 md:mb-0">
          {t.footer.dataNote}
        </span>
        <span className="mb-1 md:mb-0">
          {t.footer.credits}
        </span>
        <span className="mt-1">
          {t.footer.version} • {t.footer.license}
        </span>
      </div>
    </footer>
  );
};

export default ElementPageFooter;
