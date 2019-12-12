import { NavigationActions, SwitchActions } from 'react-navigation';

let navigator;

export function setNavigator(nav) {
  if (nav) {
    navigator = nav;
  }
}

export function navigate(routeName, params) {
  if (navigator && routeName) {
    const action = NavigationActions.navigate({ routeName, params });
    navigator.dispatch(action);
  }
}

export function switchNavigate(routeName) {
  navigator.dispatch(SwitchActions.jumpTo({ routeName }));
}

export function goBack() {
  if (navigator) {
    const action = NavigationActions.back({});
    navigator.dispatch(action);
  }
}

export default {
  setNavigator,
  goBack,
  navigate,
  switchNavigate,
};
