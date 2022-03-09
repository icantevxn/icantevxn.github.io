import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../Contact';
import { ContactService } from '../services/contact.service';
import { faWindowClose } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-view-card-details',
  templateUrl: './view-card-details.component.html',
  styleUrls: ['./view-card-details.component.css']
})
export class ViewCardDetailsComponent implements OnInit {
  constructor() { }
  
  ngOnInit(): void {
  }
    
  }
  