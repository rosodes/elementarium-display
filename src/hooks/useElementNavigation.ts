
import { useNavigate } from "react-router-dom";
import { elements } from "../data/elements";
import { Element as ElementType } from "../data/elementTypes";

export const useElementNavigation = (
  lang: string | undefined,
  element: ElementType | null
) => {
  const navigate = useNavigate();

  const handleHome = () => navigate(lang ? `/${lang}` : "/");
  const handlePrevious = () => {
    if (element) {
      const prevElementId = parseInt(element.atomic) - 1;
      navigate(lang ? `/${lang}/element/${prevElementId}` : `/element/${prevElementId}`);
    }
  };
  const handleNext = () => {
    if (element) {
      const nextElementId = parseInt(element.atomic) + 1;
      navigate(lang ? `/${lang}/element/${nextElementId}` : `/element/${nextElementId}`);
    }
  };

  const canGoPrevious = element ? parseInt(element.atomic) > 1 : false;
  const canGoNext = element
    ? parseInt(element.atomic) < elements.filter(Boolean).length
    : false;

  return { handleHome, handlePrevious, handleNext, canGoPrevious, canGoNext };
};
