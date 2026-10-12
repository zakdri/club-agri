import React from 'react';
import { data, useLanguage } from '../language.jsx';

// Shared React placeholder for the nine pages awaiting homepage approval.
export function EmptyPage({ page }) {
  const { tr } = useLanguage();
  const item = data.navigation.find(route => route.id === page);
  if (!item) throw new Error(`Unknown page: ${page}`);
  return <main id="main" className="empty-page"><div className="container"><h1>{tr(item.label)}</h1></div></main>;
}
