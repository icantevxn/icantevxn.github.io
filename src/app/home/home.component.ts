import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Contact } from '../Contact';
import { getContacts } from '../store/actions/contact.actions';
import { ContactState } from '../store/reducers/contact.reducer';
import { contactsSelector } from '../store/selector/contact.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() onGetContacts: EventEmitter<Contact[]> = new EventEmitter();
  contacts$ = this.store.pipe(select(contactsSelector));
  contacts: Contact[] = [];

  constructor(private store: Store<ContactState>) { }

  ngOnInit(): void {
    this.getAllContacts();
  }

  getAllContacts() {
    this.store.dispatch(getContacts());

  }

}
