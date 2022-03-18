import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UiService } from '../services/ui.service';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
  
export class HeaderComponent implements OnInit {
  @Output() onEmitTheme: EventEmitter<string> = new EventEmitter<string>();
  newTheme: string = '';
  faMoon = faMoon;
  constructor(private uiService: UiService) { }

  ngOnInit(): void {
    this.getTheme();
  }

  getTheme() {
    this.newTheme = this.uiService.getInitialTheme();
  }

  onToggleTheme() {
    this.newTheme = this.uiService.onToggleTheme();
    this.onEmitTheme.emit(this.newTheme);
  }
}