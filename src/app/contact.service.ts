import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Contact } from './Contact';
import { CONTACTS } from './mock-contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://localhost:5000/contacts';

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.apiUrl);
  }

  deleteContact(contact: Contact): Observable<Contact> {
    const url = `${this.apiUrl}/${contact.id}`;
    return this.http.delete<Contact>(url);
  }
  
  updateContact(contact: Contact): Observable<Contact>{
    const url = `${this.apiUrl}/${contact.id}`;
    return this.http.put<Contact>(url, contact);
  }
  
}
