export const ROUTE_STATE = 'ROUTE_STATE';

export function routeState(routeState) {
  return {
    type: ROUTE_STATE,
    routeState
  };
}