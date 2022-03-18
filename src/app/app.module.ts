import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SortByLastNamePipe } from './services/sortByLastName.pipe';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { HomeComponent } from './home/home.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ViewCardDetailsComponent } from './view-card-details/view-card-details.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { CardLayoutComponent } from './card-layout/card-layout.component';
import { FavouriteContactsComponent } from './favourite-contacts/favourite-contacts.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ContactEffects } from './store/effects/contacts.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { appReducer } from './store/appState';
import { RouterSerializer } from './store/routerSerializer';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './interceptors/error.interceptors';
import { LoadingInterceptor } from './interceptors/loading.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AddContactComponent,
    HomeComponent,
    ContactFormComponent,
    EditContactComponent,
    ViewCardDetailsComponent,
    FooterComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FavouriteContactsComponent,
    CardLayoutComponent,
    SortByLastNamePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    NgxSpinnerModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([ContactEffects]),
    StoreRouterConnectingModule.forRoot({serializer: RouterSerializer})
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
