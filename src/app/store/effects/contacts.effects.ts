import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { ContactService } from "src/app/services/contact.service";
import { addContact, addContactSuccess, getContacts, getContactsSuccess } from "../actions/contact.actions";
import { catchError, concatMap, exhaustMap, map } from "rxjs/operators";
import { EMPTY } from "rxjs";

@Injectable()
export class ContactEffects{

    //TODO: Catch error
    loadContacts$ = createEffect(() => this.action$.pipe(
        ofType(getContacts),
        exhaustMap(
            () => this.contactService.getContacts().pipe(
                map((contacts) => getContactsSuccess(contacts)),
                catchError(()=> EMPTY)
            )
        )
    )
    );

    addContact$ = createEffect(() => this.action$.pipe(
        ofType(addContact),
        concatMap(
            (newContact) => this.contactService.addContact(newContact).pipe(
                map((contact) => addContactSuccess(contact))
            )
        )
    )
    );

    constructor(private action$: Actions, private contactService: ContactService) { 
        
    }

}