import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import {
  Http,
  ConnectionBackend,
  BaseRequestOptions,
  Response,
  ResponseOptions
} from '@angular/http';
import { UsersService } from './users.service';
import { MockBackend } from '@angular/http/testing';

describe('UsersService', () => {
  // Arrange
  // beforeEach(() => TestBed.configureTestingModule({}));
  beforeEach(() => {
    TestBed.configureTestingModule({ // Se crea área de prueba para interceptar peticiones http
      providers: [
        BaseRequestOptions,
        MockBackend,
        // UsersService,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        },
      ]
    });
  });

  it('should be created', () => {
    const service: UsersService = TestBed.get(UsersService);
    expect(service).toBeTruthy();
  });

  describe('Test for getUser', () => {

    it("should return the user's data with an id",
      inject([UsersService, MockBackend], fakeAsync((usersService, mockBackend) => {

        // Arrange
        let dataResponse;
        let userMock = {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        }
        mockBackend.connections.subscribe(connection => {

          let mockResponse = new ResponseOptions({ body: JSON.stringify(userMock) })
          mockBackend.connections.subscribe(connection => {
            expect(connection.request.url).toBe('http://jsonplaceholder.typicode.com/users/1');
            connection.mockResponse(new Response(mockResponse));
          });

          // Act
          usersService.getUser(1)
            .subscribe(response => {
              dataResponse = response
            });
          tick();// Retorna las promesas que hayan o notifica a los observables que hayan y resolverlo con el mock configurado

          // Assert
          expect(dataResponse.id).toBeDefined();
          expect(dataResponse.name).toBeDefined();
          expect(dataResponse.address).toBeDefined();
        })
      }))
    );
  });

});
