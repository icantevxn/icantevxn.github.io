import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Contact } from '../Contact';
import { deleteContacts, getContacts } from '../store/actions/contact.actions';
import { faWindowClose } from '@fortawesome/free-regular-svg-icons';
import { ContactState } from '../store/reducers/contact.reducer';
import { contactsSelector } from '../store/selector/contact.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faTrash = faWindowClose;
  contacts$ = this.store.pipe(select(contactsSelector));
  constructor(private store: Store<ContactState>) { }
  
  ngOnInit(): void {
    this.getAllContacts();
  }
  
  getAllContacts() {
    this.store.dispatch(getContacts());
  }
    
  deleteContact(id: number) {
    if (confirm("Are you sure you want to delete this contact?")) {
      this.store.dispatch(deleteContacts(id));
    };
      
  }
}
    