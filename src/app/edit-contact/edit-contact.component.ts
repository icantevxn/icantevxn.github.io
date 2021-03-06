import { Component, OnInit } from '@angular/core';
import { Contact } from '../Contact';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { updateContacts } from '../store/actions/contact.actions';
import { ContactState } from '../store/reducers/contact.reducer';
import { singleContactSelector } from '../store/selector/contact.selector';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contact: Contact = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    isFavorited: false,
  };
  contact$ = this.store.pipe(select(singleContactSelector));
  subscription!: Subscription;

  constructor(
    private store: Store<ContactState>, private router: Router
  ) { }

  ngOnInit(): void {
    this.getContact();
  }

  getContact() {
    this.subscription = this.contact$
      .subscribe((data) => {
        if (data) {
          return this.contact = JSON.parse(JSON.stringify(data))
        }
      });
  }

  submitEdited(contact: Contact) {
    contact.isFavorited = this.contact.isFavorited;
    contact.id = this.contact.id;
    this.store.dispatch(updateContacts(contact));
    this.router.navigateByUrl('/details/' + contact.id);
    alert("Contact edited successfully!");

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}