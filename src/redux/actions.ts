import {useDispatch} from "react-redux";

export enum ACTIONS_TYPE {
    CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
    CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
    CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
}


export type ChangeCurrencyFieldType = {

    payload: {
        amountOfBYN: string
        amountOfCurrency: string
    }
    type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE
};

export const ChangeCurrencyFieldAC = (amountOfBYN: string, amountOfCurrency: string): ChangeCurrencyFieldType => {
    return {
        payload: {
            amountOfBYN,
            amountOfCurrency
        },
        type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE
    }
};

export type ChangeAction = {
    payload: { isBuying: boolean }
    type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION
};


export const ChangeActionAC = (isBuying: boolean): ChangeAction => {
    return {
        payload: {
            isBuying
        },
        type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION
    }
};

export type ChangeCurrentCurrencyType = {
    payload: { currentCurrency: string }
    type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY
};

export const СhangeCurrentCurrencyAC = (currentCurrency: string): ChangeCurrentCurrencyType => {
    return {
        payload: {
            currentCurrency
        },
        type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY
    }
};

export type CurrencyReducersTypes = ChangeCurrencyFieldType | ChangeAction | ChangeCurrentCurrencyType;

export function typedDispatch() {
    const dispatch = useDispatch();
    return (ac: CurrencyReducersTypes) => dispatch(ac)
}