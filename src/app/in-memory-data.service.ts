import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contact } from './contact';

//this class is used to simulate a data server
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const contacts = [
      new Contact('Ella', 'Yoon', 'ella@hotmail.com', '5710912348', 'Active'),
      new Contact('Johnny', 'AppleSeed', 'apples@hotmail.com', '70357891233', 'Active')
    ];
    return {contacts};
  }
}
