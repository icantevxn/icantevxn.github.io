import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 title: string = 'Contact List';
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log("add");
  }

}
