import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../Contact';
import { CONTACTS } from '../mock-contacts';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-card-contact',
  templateUrl: './card-contact.component.html',
  styleUrls: ['./card-contact.component.css']
})
export class CardContactComponent implements OnInit {
  @Input() contact!: Contact;
  @Output() onDeleteContact: EventEmitter<Contact> = new EventEmitter();
  faTrash = faTrashAlt;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(contact: Contact) {
    if (confirm("Are you sure you want to delete this contact?")) {
      this.onDeleteContact.emit(contact);
    }
  }

}
