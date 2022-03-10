import { createReducer, on } from "@ngrx/store";
import { Contact } from "../../Contact";
import { addContactSuccess, deleteContactsSuccess, updateContactsSuccess, getContactsSuccess, } from '../actions/contact.actions';

export interface ContactState{
    contacts: ReadonlyArray<Contact>;
}

const initialState: ReadonlyArray<Contact> = [];

export const contactReducer = createReducer(
    initialState,
    on(getContactsSuccess, (state, { contacts }) => [...contacts]),
    on(addContactSuccess, (state, { contact }) => [...state, contact]),
    //if new contact updated matches existing contact in state, return as is, else return the new contact. 
    //new contacts array should reflect changes
    on(updateContactsSuccess, (state, { contact }) => {
        const contacts = state.map((c) => {
            if (c.id == contact.id) {
                return contact;
            }
            return c;
        });
        return contacts;
    }),
    on(deleteContactsSuccess, (state, { contactId }) => 
    state.filter((contact) => contact.id !== contactId)),
);