import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Contact } from '../Contact';
import { addContact } from '../store/actions/contact.actions';
import { ContactState } from '../store/reducers/contact.reducer';
import { singleContactSelector } from '../store/selector/contact.selector';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  contact: Contact = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    isFavorited: false,
  };

  contact$ = this.store.pipe(select(singleContactSelector));

  constructor(private store: Store<ContactState>) { }

  ngOnInit(): void {
  }

  submitAdded(contact: Contact) {
    contact.isFavorited = false;
    this.store.dispatch(addContact(contact));
  }


}
