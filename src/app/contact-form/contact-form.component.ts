import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../Contact';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  isEdit = false;
  isAdd = false;
  @Input() contact!: Contact;
  @Output() onSubmitEdited: EventEmitter<Contact> = new EventEmitter();
  @Output() onSubmitAdded: EventEmitter<Contact> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(contact: Contact) {
    this.onSubmitEdited.emit(contact);
    this.onSubmitAdded.emit(contact);
  }

  
}
