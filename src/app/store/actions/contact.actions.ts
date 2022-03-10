import { createAction,props } from "@ngrx/store";
import { Contact } from "src/app/Contact";


export const getContacts = createAction('[Contact] Get contacts');
export const getContactsSuccess = createAction('[Contact] Get contacts success', ((contacts: ReadonlyArray<Contact>) => ({ contacts })));

//TODO: figure out why contact cannot be returned as  an object
export const addContact = createAction('[Contact] Add contacts',((contact: Contact) => ({contact})));
export const addContactSuccess = createAction('[Contact] Add contacts success', ((contact: Contact)=> ({contact})));
export const updateContacts = createAction('[Contact] Update contacts',  ((contact: Contact)=> ({contact})));
export const updateContactsSuccess = createAction('[Contact] Update success contacts',  ((contact: Contact)=> ({contact})));
export const deleteContacts = createAction('[Contact] Delete contacts',((contactId: number) => ({contactId})));
export const deleteContactsSuccess = createAction('[Contact] Delete contacts', ((contactId: number) => ({contactId})));