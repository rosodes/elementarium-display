
import './index.css';
import './styles/periodicTable.css';
import React from 'react';
import { createQueryClient, getInitialLanguage, removeLoadingIndicator } from './lib/appInitialization';
import { renderApp } from './lib/renderApp';

// Убираем лишний замер производительности для оптимизации
console.log('Client-side hydration started');

// Используем отложенную инициализацию для улучшения скорости запуска
const queryClient = createQueryClient();
const initialLanguage = getInitialLanguage();

// Оптимизируем восстановление состояния React Query
const queryState = window.__REACT_QUERY_STATE__;
if (queryState && Array.isArray(queryState.queries)) {
  queryState.queries.forEach((query) => {
    if (query.queryKey && query.state?.data) {
      queryClient.setQueryData(query.queryKey, query.state.data);
    }
  });
}

// Используем requestAnimationFrame для рендеринга при первой доступной возможности
requestAnimationFrame(() => {
  renderApp(queryClient, initialLanguage);
  
  // Удаляем загрузчик только после фактического рендеринга
  setTimeout(removeLoadingIndicator, 0);
});
