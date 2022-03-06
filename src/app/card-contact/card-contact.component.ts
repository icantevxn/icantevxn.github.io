import { Component, OnInit } from '@angular/core';
import { Contact } from '../Contact';
import { CONTACTS } from '../mock-contacts';
@Component({
  selector: 'app-card-contact',
  templateUrl: './card-contact.component.html',
  styleUrls: ['./card-contact.component.css']
})
export class CardContactComponent implements OnInit {
  contacts: Contact[] = CONTACTS;

  constructor() { }

  ngOnInit(): void {
  }

}
