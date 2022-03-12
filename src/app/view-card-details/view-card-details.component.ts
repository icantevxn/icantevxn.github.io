import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactState } from '../store/reducers/contact.reducer';
import { select, Store } from '@ngrx/store';
import { contactSelector } from '../store/selector/contact.selector';
import { Contact } from '../Contact';
import { faEdit, faTrashAlt, faEye } from '@fortawesome/free-regular-svg-icons';
import { faPhoneAlt, faAngleRight, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { deleteContacts } from '../store/actions/contact.actions';

@Component({
  selector: 'app-view-card-details',
  templateUrl: './view-card-details.component.html',
  styleUrls: ['./view-card-details.component.css']
})
export class ViewCardDetailsComponent implements OnInit {
  contact!: Contact;
  faTrash = faTrashAlt;
  faEdit = faEdit;
  faPlus = faEye;
  faToggle = faEllipsisV;
  faViewMore = faAngleRight;
  faPhone = faPhoneAlt;

  id: number  = Number(this.route.snapshot.paramMap.get('id'));
  contact$ = this.store.pipe(select(contactSelector(this.id)));
  
  constructor(private store: Store<ContactState>, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.getContact();
  }

  getContact() {
    this.contact$.subscribe((contact) => this.contact = contact)
  }
  
  deleteContact(id: number) {
    if (confirm("Are you sure you want to delete this contact?")) {
      this.store.dispatch(deleteContacts(id));
    };
      
  }
  
}
