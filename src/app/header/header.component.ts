import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }
  
  ngOnInit(): void {
    this.getTheme();
  }

  getTheme() {
    var computerTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    if (computerTheme) {
      document.documentElement.setAttribute('data-theme', computerTheme);
    }
  }

  onToggle() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var newTheme = "light";

    if (currentTheme === "light") {
      newTheme = "dark";
    }

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem('theme', newTheme);

  }
}