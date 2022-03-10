import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contact } from '../Contact';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ContactService } from '../services/contact.service';
import { select, State, Store } from '@ngrx/store';
import { getContacts, updateContacts } from '../store/actions/contact.actions';
import { ContactState } from '../store/reducers/contact.reducer';
import { contactSelector, contactsSelector } from '../store/selector/contact.selector';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  isEditted = false;
  @Output() onInitEditForm: EventEmitter<boolean> = new EventEmitter();
  id: number = Number(this.route.snapshot.paramMap.get('id'));
  
  contact!: Contact;

  contact$ = this.store.pipe(select(contactSelector(this.id)));
  
  constructor(
    private route: ActivatedRoute,
    private store: Store<ContactState>
  ) { }
  
  ngOnInit(): void {
    this.getContact();
    this.onInitEditForm.emit(true);
  }

  submitEdited(contact: Contact) {
    contact.id = this.id;
    const newContact = { ...contact };
    this.store.dispatch(updateContacts(newContact));
    this.isEditted = true;
  }

  getContact() {
    this.contact$.subscribe((contact) => this.contact = contact)
  }
  

}