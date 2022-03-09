import { Component, OnInit } from '@angular/core';
import { Contact } from '../Contact';
import { ContactService } from '../services/contact.service';

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
    email: ''
  };

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contact;
  }

  submitAdded(contact:Contact) {
    this.contactService.addContact(contact).subscribe();
  }

}
