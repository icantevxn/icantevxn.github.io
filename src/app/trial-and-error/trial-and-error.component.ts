import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { deleteContacts, getContacts } from '../store/actions/contact.actions';
import { faEdit, faTrashAlt, faEye } from '@fortawesome/free-regular-svg-icons';
import { faPhoneAlt, faAngleRight, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { ContactState } from '../store/reducers/contact.reducer';
import { contactsSelector } from '../store/selector/contact.selector';

@Component({
  selector: 'app-trial-and-error',
  templateUrl: './trial-and-error.component.html',
  styleUrls: ['./trial-and-error.component.css']
})
export class TrialAndErrorComponent implements OnInit {
  faTrash = faTrashAlt;
  faEdit = faEdit;
  faPlus = faEye;
  faToggle = faEllipsisV;
  faViewMore = faAngleRight;
  faPhone = faPhoneAlt;
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