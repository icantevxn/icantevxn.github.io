import { createSelector } from "@ngrx/store";
import { Contact } from "src/app/Contact";
import { ContactState } from "../reducers/contact.reducer";
import { RouterStateUrl } from "../routerSerializer";
import { getCurrentRoute } from "./router.selector";

export const contactsSelector = createSelector(
    (state: ContactState) => state.contacts,
    (contacts: ReadonlyArray<Contact>) => contacts);


export const favContactsSelector = createSelector(
    contactsSelector,
    (contacts =>
        contacts.filter((c) => c.isFavorited == true)));


export const singleContactSelector = createSelector(
    contactsSelector,
    getCurrentRoute,
    (contacts, route: RouterStateUrl) => contacts.find((contact) => contact.id == route.params['id'])
);



