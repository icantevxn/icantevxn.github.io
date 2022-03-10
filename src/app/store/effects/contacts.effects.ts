import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { ContactService } from "src/app/services/contact.service";
import * as ContactActions from "../actions/contact.actions";
import { catchError, concatMap, exhaustMap, map, mergeMap } from "rxjs/operators";
import { EMPTY } from "rxjs";
import { ActionType } from "@ngrx/store";

@Injectable()
export class ContactEffects{

    //TODO: Catch error
    loadContacts$ = createEffect(() => this.action$.pipe(
        ofType(ContactActions.getContacts),
        exhaustMap(
            () => this.contactService.getContacts().pipe(
                map((contacts) => (ContactActions.getContactsSuccess(contacts))),
                catchError(()=> EMPTY)
            )
        )
    )
    );

    //TODO: study about maps | settimeout
    addContact$ = createEffect(() => this.action$.pipe(
        ofType(ContactActions.addContact),
        concatMap(
            ({contact}) => this.contactService.addContact(contact).pipe(
                map((contact) => ContactActions.addContactSuccess(contact))
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

    updateContact$ = createEffect( () => this.action$.pipe(
            ofType(ContactActions.updateContacts),
            concatMap(
                ({ contact }) => this.contactService.updateContact(contact).pipe(
                    map(()=> ContactActions.updateContactsSuccess(contact))
                )
            )
        )
    )

    constructor(private action$: Actions, private contactService: ContactService) { 
        
    }

}