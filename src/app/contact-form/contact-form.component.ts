import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../Contact';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  faWarning = faExclamationCircle;

  @Input() contact!: Contact;
  @Input() isEdit: boolean = false;
  @Input() isAdd: boolean = false;
  @Output() onSubmitEdited: EventEmitter<Contact> = new EventEmitter();
  @Output() onSubmitAdded: EventEmitter<Contact> = new EventEmitter();

  constructor() { }


  ngOnInit(): void {
  }

  onSubmit(contactForm: NgForm) {
    const contact = contactForm.value;
    contactForm.resetForm();
    this.onSubmitEdited.emit(contact);
    this.onSubmitAdded.emit(contact);
  }


}
