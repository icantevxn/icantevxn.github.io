import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ContactState } from '../store/reducers/contact.reducer';
import { select, Store } from '@ngrx/store';
import { singleContactSelector } from '../store/selector/contact.selector';
import { faEdit, faTrashAlt, faEye, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faPhoneAlt, faAngleRight, faEllipsisV, faHeart as faFullHeart} from '@fortawesome/free-solid-svg-icons';
import { deleteContacts, updateContacts } from '../store/actions/contact.actions';
import { Contact } from '../Contact';

@Component({
  selector: 'app-view-card-details',
  templateUrl: './view-card-details.component.html',
  styleUrls: ['./view-card-details.component.css']
})
export class ViewCardDetailsComponent implements OnInit {
  faIsFav = faFullHeart;
  faNotFav = faHeart;
  faTrash = faTrashAlt;
  faEdit = faEdit;
  faPlus = faEye;
  faToggle = faEllipsisV;
  faViewMore = faAngleRight;
  faPhone = faPhoneAlt;

  isDeleted: boolean = false;
  
  id: number  = Number(this.route.snapshot.paramMap.get('id'));
  contact$ = this.store.pipe(select(singleContactSelector));
  isNotFavorited: any;
  
  constructor(private store: Store<ContactState>, private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    this.getContact();
  }
  
  getContact() {

    }
  
  deleteContact() {
    if (confirm("Are you sure you want to delete this contact?")== true) {
      this.store.dispatch(deleteContacts(this.id));
      this.router.navigateByUrl('/home');
    }
    
  }

   onClickFavorite(contact: Contact) {
    this.isNotFavorited = contact.isFavorited;
    this.isNotFavorited = !this.isNotFavorited;
    const newContact = { ...contact };
    newContact.isFavorited = this.isNotFavorited;
    this.store.dispatch(updateContacts(newContact));
  }
  
}
