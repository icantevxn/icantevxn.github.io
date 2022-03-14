import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Contact } from '../Contact';
import { getContacts } from '../store/actions/contact.actions';
import { ContactState } from '../store/reducers/contact.reducer';
import { contactsSelector } from '../store/selector/contact.selector';

@Component({
  selector: 'app-favourite-contacts',
  templateUrl: './favourite-contacts.component.html',
  styleUrls: ['./favourite-contacts.component.css']
})
export class FavouriteContactsComponent implements OnInit {

  contacts$ = this.store.pipe(select(contactsSelector));
  contacts: Contact[] = [];

  constructor(private store: Store<ContactState>) { }

  ngOnInit(): void {
    this.getAllFavContacts();
  }

  
  getAllFavContacts() {
    this.store.dispatch(getContacts());
    this.contacts$.subscribe((contacts) => {
      const favContacts = [];
      for (let i = 0; i < contacts.length; i++){
        if (contacts[i].isFavorited == true) {
          favContacts.push(contacts[i]);
        }
      }
      this.contacts = favContacts;
  });
  }

}
