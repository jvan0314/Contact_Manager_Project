import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { MessageService} from './message.service';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

//contacts web API expects a special header in HTTP requests so the header is in httpOptions
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

//this allows the app module to not require the provider, this is to maintain a single provider
@Injectable({
  providedIn: 'root'
})

export class ContactService {

//URL to web API
  private contactsUrl = 'api/contacts';

  constructor(
    private messageService: MessageService,
    private http: HttpClient) {}

//logs a ContactService message with the MessageService
  private log(message: string) {
    this.messageService.add(`ContactService: ${message}`);
  }

  // Post: add a new contact to the server and logging it
  addContact (contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.contactsUrl, contact, httpOptions).pipe(
      tap(() => this.log(`Added contact with ID: ${contact.id}`)),
      catchError(this.handleError<Contact>('addContact'))
    );
  }

  // Get: get list of contacts from the server
  getContacts (): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactsUrl)
      .pipe(
        tap(contacts => this.log('Fetched list of contacts')),
        catchError(this.handleError('getContacts', []))
      );
  }

  // Delete: deletes the current contact from the server
  deleteContact (contact: Contact | number): Observable<Contact> {
    const id = typeof contact === 'number' ? contact : contact.id;
    const url = `${this.contactsUrl}/${id}`;

    return this.http.delete<Contact>(url, httpOptions).pipe(
      tap(_ => this.log(`Deleted contact ID: ${id}`)),
      catchError(this.handleError<Contact>('deleteContact'))
    );
  }

  // Put: updated the current contact's information
  updateContact (contact: Contact): Observable<any> {
    return this.http.put(this.contactsUrl, contact, httpOptions).pipe(
      tap(_ => this.log(`Updated contact ID: ${contact.id}`)),
      catchError(this.handleError<any>('updateContact'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // send the error to remote logging infrastructure
      console.error(error);
      // better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }




}
