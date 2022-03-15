import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loadRequestCount = 0;
  constructor(private spinnerService: NgxSpinnerService) { }

  loading() {
    this.loadRequestCount++;
    this.spinnerService.show(undefined, {
      type: 'square-jelly-box',
      bdColor: 'rgba(var(--loading-color), 0.7)',
      color: 'var(--text-color)',
      size: 'medium',
    }
    );
  }
  
  idle() {
    this.loadRequestCount--;
    if (this.loadRequestCount <= 0) {
      this.loadRequestCount = 0;
      this.spinnerService.hide();
    }
  }
}
