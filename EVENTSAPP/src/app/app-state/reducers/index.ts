import {
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
    ActionReducer,
    MetaReducer,
} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from '../shared/utils';

import { environment } from '../../../environments/environment';

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */

import * as fromLoggedInUser from './loggedinuser';
import * as fromTransactions from './transactions';

export interface State {
    loggedinuser: fromLoggedInUser.State;
    transactions: fromTransactions.State;
    routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: ActionReducerMap<State> = {
  loggedinuser: fromLoggedInUser.reducer,
  transactions: fromTransactions.reducer,
  routerReducer: fromRouter.routerReducer,
};

  /*localstorage setup for the store
  Provide state (reducer) keys to sync with local storage. Returns a meta-reducer.
*/

const reducerKeys = ['loggedinuser','selectedproperty','searchAccounts','billing'];
    export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({keys: reducerKeys})(reducer);
}

// //console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */

export const metaReducers: MetaReducer<State>[] = environment.production?[localStorageSyncReducer]:[logger, storeFreeze,localStorageSyncReducer];

/* Loggedin user start */
export const getLoggedInUserState = createFeatureSelector<fromLoggedInUser.State>('loggedinuser');

export const getLoggedInUser = createSelector(
   getLoggedInUserState,
   fromLoggedInUser.getLoggedInUser
)

export const validateLogin = createSelector(
   getLoggedInUserState,
   fromLoggedInUser.validateLogin
)
/* Loggedin User end */

/* Transactions Start */
export const getTransactionState = createFeatureSelector<fromTransactions.State>('transactions');

export const getTransactions = createSelector(
    getTransactionState,
    fromTransactions.listTransactions
)

/* Transactions End */