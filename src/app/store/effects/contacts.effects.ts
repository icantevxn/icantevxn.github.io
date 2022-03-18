import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { ContactService } from "src/app/services/contact.service";
import * as ContactActions from "../actions/contact.actions";
import { concatMap, exhaustMap, filter, map, mergeMap, switchMap } from "rxjs/operators";
import { RouterNavigatedAction, ROUTER_NAVIGATION } from "@ngrx/router-store";
import { Router } from "@angular/router";

@Injectable()
export class ContactEffects {

    loadContacts$ = createEffect(() => this.action$.pipe(
        ofType(ContactActions.getContacts),
        exhaustMap(
            () => this.contactService.getContacts().pipe(
                map((contacts) => (ContactActions.getContactsSuccess(contacts)))
            )
        )
    )
    );

    getContact$ = createEffect(() => this.action$.pipe(
        ofType(ROUTER_NAVIGATION),
        filter((r: RouterNavigatedAction) => {
            if (r.payload.routerState.url.startsWith('/edit') || r.payload.routerState.url.startsWith('/details/')) {
                return true;
            }
            else return false;
        }),
        map((r: RouterNavigatedAction) => {
            return r.payload.routerState['params']['id'];
        }),
        switchMap(
            (id) => {
                return this.contactService.getContact(id).pipe(
                    map((data) => {
                        const newContact = [{ ...data, id }];
                        return ContactActions.getContactsSuccess(newContact);
                    }
                    )
                )
            })
    ));

    addContact$ = createEffect(() => this.action$.pipe(
        ofType(ContactActions.addContact),
        concatMap(
            ({ contact }) => this.contactService.addContact(contact).pipe(
                map((contact) => {
                    alert("Contact added successfully!");
                    this.router.navigateByUrl('/details/' + contact.id);
                    return ContactActions.addContactSuccess(contact);
                })
            )
        )
    )
    );

    deleteContact$ = createEffect(() => this.action$.pipe(
        ofType(ContactActions.deleteContacts),
        mergeMap(
            ({ contactId }) => this.contactService.deleteContact(contactId).pipe(
                map(() => ContactActions.deleteContactsSuccess(contactId))
            )
        )
    ));

    updateContact$ = createEffect(() => this.action$.pipe(
        ofType(ContactActions.updateContacts),
        concatMap(
            ({ contact }) => this.contactService.updateContact(contact).pipe(
                map(() => {
                    return ContactActions.updateContactsSuccess(contact)
                })
            )
        )
    )
    )

    constructor(private action$: Actions, private contactService: ContactService, private router: Router) {

    }

}