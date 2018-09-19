import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './shared/user/user.interface';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users: User[] = [
      {
        id: 3,
        name: 'Sue Krause',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        id: 1,
        name: 'Markus Kenny',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        id: 2,
        name: 'Greyson Newman',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      }
    ];
    return { users };
  }
}
