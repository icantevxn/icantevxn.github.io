import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contact } from '../Contact';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { getContact, updateContacts } from '../store/actions/contact.actions';
import { ContactState } from '../store/reducers/contact.reducer';
import { singleContactSelector } from '../store/selector/contact.selector';
import { Subject, Subscription } from 'rxjs';
import { delay, takeUntil } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  id: number = Number(this.route.snapshot.paramMap.get('id'));
  contacts: Contact[] = [];
  contact: Contact = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    isFavorited: false,
  };
  contact$ = this.store.pipe(select(singleContactSelector(this.id)));
  subscription!: Subscription;
  
  constructor(
    private route: ActivatedRoute,
    private store: Store<ContactState>,
    private loadingService: LoadingService
    ) { }
    
    ngOnInit(): void {
      this.getContact();
    }
    
    getContact() {
      this.store.dispatch(getContact(this.id));
      this.subscription = this.contact$
      .subscribe((data) => {
        if (data) {
          return this.contact = JSON.parse(JSON.stringify(data));
        }
      }
      );
    }
    
    submitEdited(contact: Contact) {
      contact.isFavorited = this.contact.isFavorited;
      contact.id = this.id;
      this.store.dispatch(updateContacts(contact));
      alert("Contact edited successfully!");
    }
    
    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
    
    
  }