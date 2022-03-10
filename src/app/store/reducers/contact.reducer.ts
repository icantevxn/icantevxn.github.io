import { createReducer, on } from "@ngrx/store";
import { CONTACTS } from "src/app/mock-contacts";
import { Contact } from "../../Contact";
import { addContact, getContacts } from '../actions/contact.actions';

export interface ContactState{
    contacts: ReadonlyArray<Contact>;
}

const initialState: ReadonlyArray<Contact> = [];

export const contactReducer = createReducer(
    initialState,
    on(getContacts, (state, {contacts}) => contacts),
    on(addContact, (state, contact)=> [...state, contact])
);