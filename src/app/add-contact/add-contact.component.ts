import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
  contact: Contact = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    isFavorited: false,
  };
  constructor(private store: Store<ContactState>) { }

  ngOnInit(): void {
  }

  submitAdded(contact: Contact) {
    contact.isFavorited = false;
    this.store.dispatch(addContact(contact));
    alert("Contact edited successfully!");

  }

}
