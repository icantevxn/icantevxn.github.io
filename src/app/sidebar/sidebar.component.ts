import { Component, OnInit } from '@angular/core';
import { faHome, faPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  faHome = faHome;
  faAdd = faPlus;
  faQuestion = faQuestionCircle;
  faHeart = faHeart;
  isActive = false;
  title: string = 'Contact List';
  constructor() { }
  
  ngOnInit(): void {
  }

  toggleIsActive() {
    this.isActive = !this.isActive;
  }
  
}
