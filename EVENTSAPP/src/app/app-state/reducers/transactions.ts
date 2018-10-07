import * as transactions from '../actions/transactions';
import * as storage from '../state/storage'

export interface State {
    isLoading: boolean;
    isLoadingSuccess: boolean;
    transactions: any;
}

const initialState: State = {
    isLoading: false,
    isLoadingSuccess: false,
    transactions: undefined,
};

export function reducer(state= initialState, action: transactions.Actions): State {

    switch(action.type) {

        case transactions.ActionTypes.LIST_TRANSACTIONS: return {...state, isLoading: true, isLoadingSuccess: false, transactions: undefined };
        case transactions.ActionTypes.LIST_TRANSACTIONS_SUCCESS: return {...state, isLoading: false, isLoadingSuccess: true, transactions: action.payload };
        case transactions.ActionTypes.LIST_TRANSACTIONS_FAILURE: return {...state, isLoading: false, isLoadingSuccess: true, transactions: action.payload };

        default: return state
    }
}


export const listTransactions = (state: State) => {
    return {isLoading: state.isLoading, isLoadingSuccess: state.isLoadingSuccess, data:state.transactions}
}