
import { useState, useEffect } from "react";
import { Element as ElementType } from "../data/elementTypes";
import { useToast } from "@/components/ui/use-toast";

export const useElementBookmark = (
  element: ElementType | null,
  elementId: string | undefined,
  t: any
) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { toast } = useToast();

  // Проверяем закладку при открытии элемента
  useEffect(() => {
    if (!element || !elementId) return;
    try {
      const bookmarks = JSON.parse(localStorage.getItem("bookmarkedElements") || "[]");
      setIsBookmarked(bookmarks.includes(elementId));
    } catch {}
  }, [element, elementId]);

  // Обработчик закладки
  const handleToggleBookmark = () => {
    if (!elementId || !element) return;
    try {
      const bookmarks = JSON.parse(localStorage.getItem("bookmarkedElements") || "[]");
      let newBookmarks;
      if (isBookmarked) {
        newBookmarks = bookmarks.filter((id: string) => id !== elementId);
        toast({
          title: t.ui?.elementRemoved || "Element removed from bookmarks",
          description: `${element.name} (${element.symbol}) has been removed from your bookmarks`,
          duration: 3000,
        });
      } else {
        newBookmarks = [...bookmarks, elementId];
        toast({
          title: t.ui?.elementBookmarked || "Element bookmarked",
          description: `${element.name} (${element.symbol}) has been added to your bookmarks`,
          duration: 3000,
        });
      }
      localStorage.setItem("bookmarkedElements", JSON.stringify(newBookmarks));
      setIsBookmarked(!isBookmarked);
    } catch (e) {
      // ignore
    }
  };

  return { isBookmarked, handleToggleBookmark };
};
