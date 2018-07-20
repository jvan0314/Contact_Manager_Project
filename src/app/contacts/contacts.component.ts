import { Component, OnInit } from '@angular/core';
import { Contact } from '../contactInfo';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contact: Contact = {
    id: 1,
    firstName: 'Jacky',
    lastName: 'Cheung',
    email: 'Jacky.Cheung@gmail.com',
    phoneNumber: '1234567890',
    status: 'active'
  }

  constructor() { }

  ngOnInit() {
  }

}
