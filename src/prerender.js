
// Этот файл - мост между JS и TS для функциональности предварительного рендеринга
// Используем динамический импорт для совместимости с ESM
export async function prerenderRoutes(...args) {
  try {
    const { prerenderRoutes: prerenderRoutesTs } = await import('./prerender.tsx');
    return prerenderRoutesTs(...args);
  } catch (err) {
    console.error('Failed to import prerenderRoutes from prerender.tsx:', err);
    throw err;
  }
}

// Экспортируем функцию для использования в процессе сборки
export default prerenderRoutes;
