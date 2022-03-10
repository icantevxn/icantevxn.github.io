import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactState } from '../store/reducers/contact.reducer';
import { select, Store } from '@ngrx/store';
import { contactSelector } from '../store/selector/contact.selector';

@Component({
  selector: 'app-view-card-details',
  templateUrl: './view-card-details.component.html',
  styleUrls: ['./view-card-details.component.css']
})
export class ViewCardDetailsComponent implements OnInit {
  
  id: number  = Number(this.route.snapshot.paramMap.get('id'));
  contact$ = this.store.pipe(select(contactSelector(this.id)));
  
  constructor(private store: Store<ContactState>, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
  }

  
  
}
