import * as loggedInUser from '../actions/loggedinuser';
import * as storage from '../state/storage'

export interface State {
    isLoading: boolean;
    isLoadingSuccess: boolean;
    loggedInUser: any;
}

const initialState: State = {
    isLoading: false,
    isLoadingSuccess: false,
    loggedInUser: storage.getItem('loggedinuser'),
};

export function reducer(state= initialState, action: loggedInUser.Actions): State {

    switch(action.type) {

        case loggedInUser.ActionTypes.VALIDATE_LOGIN: return {...state, isLoading: true, isLoadingSuccess: false, loggedInUser: undefined };
        case loggedInUser.ActionTypes.VALIDATE_LOGIN_SUCCESS: return {...state, isLoading: false, isLoadingSuccess: true, loggedInUser: action.payload };
        case loggedInUser.ActionTypes.VALIDATE_LOGIN_FAILURE: return {...state, isLoading: false, isLoadingSuccess: true, loggedInUser: action.payload };

        case loggedInUser.ActionTypes.LOGOUT: return {...state, loggedInUser: undefined}

        default: return state
    }
}

export const getLoggedInUser = (state: State) => state.loggedInUser;

export const validateLogin = (state: State) => {
    return {isLoading: state.isLoading, isLoadingSuccess: state.isLoadingSuccess, loggedInUser:state.loggedInUser}
}