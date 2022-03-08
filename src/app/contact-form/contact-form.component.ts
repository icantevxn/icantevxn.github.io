import { Component, OnInit } from '@angular/core';
import { Contact } from '../Contact';
import { CONTACTS } from '../mock-contacts';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contacts: Contact[] = [];

  //add service as provider
  constructor() { }

  ngOnInit(): void {
  }

  
}
