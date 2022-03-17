import { Component, OnInit } from '@angular/core';
import { UiService } from './services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  newTheme: string = '';
  constructor(private uiService: UiService) {
    
  }
  
  ngOnInit(): void {
    this.newTheme = this.uiService.getInitialTheme();
  }
  
  
  getNewTheme(theme: string) {
    this.newTheme = theme;
  }
  
}
