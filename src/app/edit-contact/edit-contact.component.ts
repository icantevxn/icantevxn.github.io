import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contact } from '../Contact';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ContactService } from '../services/contact.service';
import { Store } from '@ngrx/store';
import { getContacts } from '../store/actions/contact.actions';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contact!: Contact;
  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private  store: Store,
    private location: Location) { }
  
  ngOnInit(): void {
    this.getContact();
  }

  getContact() {
    //The route.snapshot is a static image of the route information shortly after the component was created.
    //The paramMap is a dictionary of route parameter values extracted from the URL.The "id" key returns the id of the contact to fetch.
    //Route parameters are always strings. The JavaScript Number function converts the string to a number, which is what a contact id should be.
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.contactService.getContact(id).subscribe(
      contact => this.contact = contact
    );
  }

  submitEdited(contact: Contact) {
    this.contactService.updateContact(contact).subscribe();
  }
  
}
