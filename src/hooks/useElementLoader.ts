
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { elements } from "../data/elements";
import { Element as ElementType } from "../data/elementTypes";

export const useElementLoader = (
  currentLanguage: string,
  setLanguage: (lang: string) => void
) => {
  const { elementId, lang } = useParams<{ elementId: string; lang?: string }>();
  const [element, setElement] = useState<ElementType | null>(null);
  const navigate = useNavigate();

  // Set language via URL param
  useEffect(() => {
    if (lang && ["en", "ru", "uk"].includes(lang) && lang !== currentLanguage) {
      setLanguage(lang);
    }
  }, [lang, currentLanguage, setLanguage]);

  // Find and validate element
  useEffect(() => {
    if (elementId) {
      const foundElement = elements.find((e) => e && e.atomic === elementId);
      if (foundElement) {
        setElement(foundElement as ElementType);
      } else {
        navigate(lang ? `/${lang}/404` : "/404", { replace: true });
      }
    }
  }, [elementId, lang, navigate]);

  return { element, elementId, lang };
};
