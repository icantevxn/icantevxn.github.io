import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Contact } from '../Contact';
import { getContacts } from '../store/actions/contact.actions';
import { ContactState } from '../store/reducers/contact.reducer';
import { favContactsSelector } from '../store/selector/contact.selector';

@Component({
  selector: 'app-favourite-contacts',
  templateUrl: './favourite-contacts.component.html',
  styleUrls: ['./favourite-contacts.component.css']
})
export class FavouriteContactsComponent implements OnInit {

  contacts$ = this.store.pipe(select(favContactsSelector));

  constructor(private store: Store<ContactState>) { }

  ngOnInit(): void {
    this.getAllFavContacts();
  }


  getAllFavContacts() {
    this.store.dispatch(getContacts());
  }


}
