import { PAGE_CHANGE } from '../actions/header';

export default function activePage(state = "home", action) {
  switch (action.type) {
    case PAGE_CHANGE:
      return action.activePage;
    default:
      return state;
  }
}
