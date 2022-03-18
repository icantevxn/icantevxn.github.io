import { routerReducer, RouterReducerState } from "@ngrx/router-store";
import { contactReducer, ContactState } from "./reducers/contact.reducer";

export interface AppState {
    contact: ContactState;
    router: RouterReducerState;
}


export const appReducer = {
    contacts: contactReducer,
    router: routerReducer
};
