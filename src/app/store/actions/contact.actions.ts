import { createAction } from "@ngrx/store";
import { Contact } from "src/app/Contact";


export const getContacts = createAction('[Contact] Get contacts');
export const getContactsSuccess = createAction('[Contact] Get contacts success', ((contacts: ReadonlyArray<Contact>) => ({contacts})));
export const addContact = createAction('[Contact] Add contacts',((contact: Contact)=> contact));
export const addContactSuccess = createAction('[Contact] Add contacts success', ((contact: Contact)=> contact));
export const updateContacts = createAction('[Contact] Update contacts');
export const removeContacts = createAction('[Contact] Remove contacts', ((id: number) => id));
export const removeContactsSuccess = createAction('[Contact] Remove contacts', ((id: number)=> id));