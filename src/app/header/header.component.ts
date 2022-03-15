import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { UiService } from '../services/ui.service';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  newTheme: any;
  faMoon = faMoon;
  constructor(private loadingService: LoadingService, private uiService: UiService) { }
  
  ngOnInit(): void {
    this.getTheme();
  }
  
  getTheme() {
    this.newTheme = this.uiService.getInitialTheme();
  }
  
  onToggleTheme() {
    this.newTheme = this.uiService.onToggleTheme();
  }
}