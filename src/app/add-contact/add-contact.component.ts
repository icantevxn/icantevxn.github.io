import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Contact } from '../Contact';
import { ContactService } from '../services/contact.service';
import { addContact } from '../store/actions/contact.actions';
import { ContactState } from '../store/reducers/contact.reducer';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  isAdded = false;
  contact: Contact = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: ''
  };

  constructor(private store: Store<ContactState>) { }

  ngOnInit(): void {
    this.contact;
  }

  submitAdded(contact:Contact) {
    this.store.dispatch(addContact(contact));
    this.isAdded = true;
  }

}
