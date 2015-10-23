export const PAGE_CHANGE = 'PAGE_CHANGE';

export function pageChange(activePage) {
  return {
    type: PAGE_CHANGE,
    activePage
  };
}