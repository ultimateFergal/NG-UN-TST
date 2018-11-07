import { Observable } from 'rxjs/';
import { of } from 'rxjs';

import { User } from './user';

export class MockUsersService {

    getAllUsers(): Observable<User[]> {
        return of([
            new User('valentina', 'asas@as.co', 'asas'),
            new User('nicolas', 'nicolas@asas.co', 'asas'),
            new User('zulema', 'zule@zule.co', 'asas')
         ]);
    }

    getUser(): Observable<User> {
        return of(
            new User('valentina', 'asas@as.co', 'asas')
         );
    }
}