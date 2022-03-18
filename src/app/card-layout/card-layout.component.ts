import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Contact } from '../Contact';
import { deleteContacts, updateContacts } from '../store/actions/contact.actions';
import { faEdit, faTrashAlt, faEye, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faPhoneAlt, faPlus, faEllipsisV, faHeart as faFavorited } from '@fortawesome/free-solid-svg-icons';
import { ContactState } from '../store/reducers/contact.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-layout',
  templateUrl: './card-layout.component.html',
  styleUrls: ['./card-layout.component.css']
})
export class CardLayoutComponent implements OnInit {
  faTrash = faTrashAlt;
  faEdit = faEdit;
  faHeart = faHeart;
  faFavorited = faFavorited;
  faViewMore = faEye;
  faToggle = faEllipsisV;
  faPhone = faPhoneAlt;
  faPlus = faPlus;

  isNotFavorited = false;
  theme: string = '';
  isDark = false;
  contacts: Contact[] = [];
  @Input() contacts$!: Observable<ReadonlyArray<Contact>>;
  constructor(private store: Store<ContactState>) { }

  ngOnInit(): void {
  }


  deleteContact(id: number) {
    if (confirm("Are you sure you want to delete this contact?") === true) {
      this.store.dispatch(deleteContacts(id));
    };
  }


  onClickFavorite(contact: Contact) {
    this.isNotFavorited = contact.isFavorited;
    this.isNotFavorited = !this.isNotFavorited;
    const newContact = { ...contact };
    newContact.isFavorited = this.isNotFavorited;
    this.store.dispatch(updateContacts(newContact));
  }

}
