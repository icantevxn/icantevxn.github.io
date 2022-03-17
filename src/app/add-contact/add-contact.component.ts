import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Contact } from '../Contact';
import { ContactService } from '../services/contact.service';
import { LoadingService } from '../services/loading.service';
import { addContact, getContact } from '../store/actions/contact.actions';
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
    this.contact = contact;
    console.log(contact);
    contact.isFavorited = false;
    this.store.dispatch(addContact(contact)); 
  }

  
}
