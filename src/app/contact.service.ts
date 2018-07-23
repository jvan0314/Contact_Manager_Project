import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { MessageService} from './message.service';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  private contactsUrl = 'api/contacts';

  constructor(
    private messageService: MessageService,
    private http: HttpClient) {}

  /** POST: add a new hero to the server */
  addContact (contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.contactsUrl, contact, httpOptions).pipe(
      tap((hero: Contact) => this.log(`added Contact w/ id=${contact.id}`)),
      catchError(this.handleError<Contact>('addContact'))
    );
  }

  /** GET heroes from the server */
  getContacts (): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactsUrl)
      .pipe(
        tap(contacts => this.log('fetched heroes')),
        catchError(this.handleError('getHeroes', []))
      );
  }

  getContact(id: number): Observable<Contact> {
    const url = `${this.contactsUrl}/${id}`;
    return this.http.get<Contact>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Contact>(`getHero id=${id}`))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteContact (contact: Contact | number): Observable<Contact> {
    const id = typeof contact === 'number' ? contact : contact.id;
    const url = `${this.contactsUrl}/${id}`;

    return this.http.delete<Contact>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted contact id=${id}`)),
      catchError(this.handleError<Contact>('deleteContact'))
    );
  }

  /** PUT: update the hero on the server */
  updateContact (contact: Contact): Observable<any> {
    return this.http.put(this.contactsUrl, contact, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${contact.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`ContactService: ${message}`);
  }


}
