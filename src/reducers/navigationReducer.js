import { NavigationActions } from 'react-navigation';
import { handleActions } from 'react-actions';

import { MainNavigator } from 'navigators/mainNavigator/MainNavigator';

const defaultState = {
  index: 0,
  routes: [{ key: 'Landing', routeName: 'Landing' }]
};

const { NAVIGATE, BACK } = NavigationActions;

export default handleActions({
  [NAVIGATE]: (prevState, { payload: { routeName } }) => {
    return MainNavigator.router.getStateForAction(
      NavigationActions.navigate({ routeName }),
      prevState
    );
  },
  [BACK]: prevState => {
    return MainNavigator.router.getStateForAction(
      NavigationActions.back(),
      prevState
    );
  },
  defaultState
});
