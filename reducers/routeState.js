import { ROUTE_STATE } from '../actions/routeState';

export default function routeState(state = "home", action) {
  switch (action.type) {
    case ROUTE_STATE:
      return action.routeState;
    default:
      return state;
  }
}
