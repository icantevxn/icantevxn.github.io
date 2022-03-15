import { EventEmitter, Injectable, Output } from "@angular/core";
import { Observable } from "rxjs";
import { LoadingService } from "./loading.service";

@Injectable({
    providedIn: 'root'
})
export class UiService {
    constructor(private loadingService: LoadingService) {
        
    }
    
    
    getInitialTheme(): any {
        
        const toggleSwitch = document.getElementById('darkSwitch') as HTMLInputElement;
        var computerTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        console.log(computerTheme);
        if (computerTheme) {
            document.documentElement.setAttribute('data-theme', computerTheme);
            
            if (computerTheme == 'dark') {
                toggleSwitch.checked = true;
            }
            else {
                toggleSwitch.checked = false
            }
        }
        
        return computerTheme;
    }
    
    
    
    onToggleTheme() {
        const toggleSwitch = document.getElementById('darkSwitch') as HTMLInputElement;
        this.loadingService.loading();
        var newTheme = '';
        if (toggleSwitch.checked) {
            newTheme = 'dark';
            
        } else {
            newTheme = 'light';
        }
        setTimeout(() => {
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            this.loadingService.idle();
        }, 1000);
        
        return newTheme;
    }
    
}
