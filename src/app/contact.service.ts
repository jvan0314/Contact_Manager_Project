import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { contactList } from './mock-contacts';
import { MessageService} from './message.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  // getContacts(): Contact[] {
  //   //   return contactList;
  //   // }

  constructor(private messageService: MessageService) { }

  getContacts(): Observable<Contact[]> {
    // send the message _after_ fetching contacts
    this.messageService.add('ContactService: Fetched Contacts');

    return of(contactList);
  }


}
