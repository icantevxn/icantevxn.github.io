import { createSelector } from "@ngrx/store";
import { Contact } from "src/app/Contact";
import { ContactState } from "../reducers/contact.reducer";

export const contactsSelector = createSelector(
    (state: ContactState) => state.contacts,
    (contacts: ReadonlyArray<Contact>) => contacts
);

export const contactSelector = (id: number) =>
    createSelector(contactsSelector, (contacts) => {
        return contacts.filter((contact: Contact) => contact.id == id);
});

