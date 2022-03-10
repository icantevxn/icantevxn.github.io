import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Contact } from '../Contact';
import { ContactService } from '../services/contact.service';
import { getContacts, removeContacts } from '../store/actions/contact.actions';
import { faWindowClose } from '@fortawesome/free-regular-svg-icons';
import { ContactState } from '../store/reducers/contact.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faTrash = faWindowClose;
  contacts: Contact[] = [];
  contacts$ = this.store.select('contacts');
  constructor(private contactService: ContactService, private store: Store<ContactState>) { }
  
  ngOnInit(): void {
    this.getAllContacts();
  }
  
  getAllContacts() {
    this.store.dispatch(getContacts());
  }
    
  deleteContact(id: number) {
    //this.store.dispatch(removeContacts(id));
      
  }
}
    