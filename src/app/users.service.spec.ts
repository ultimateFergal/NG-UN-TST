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
        UsersService,
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

  /*   it('should be created', () => {
      const service: UsersService = TestBed.get(UsersService);
      expect(service).toBeTruthy();
    }); */

  it('should be created', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));


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

  describe('test for createUser', () => {

    it("should return an new user", inject([UsersService, MockBackend], fakeAsync((userService, mockBackend) => {
      //Arrange
      let dataResponse, dataError;
      let userMock = {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz"
      };
      let mockResponse = new ResponseOptions({ body: JSON.stringify(userMock) });
      mockBackend.connections.subscribe((connection) => {
        expect(connection.request.url).toBe('http://jsonplaceholder.typicode.com/users');
        connection.mockRespond(new Response(mockResponse));
      });

      //Act
      let newUser = {
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz"
      }
      userService.createUser(newUser)
        .subscribe(
          response => { // success
            dataResponse = response;
          },
          error => { //error
            dataError = error;
          }
        );
      tick();

      //Assert
      expect(dataError).toBeUndefined();
      expect(dataResponse.id).toBeDefined();
      expect(dataResponse.name).toEqual('Leanne Graham');
      expect(dataResponse.username).toEqual('Bret');
      expect(dataResponse.email).toEqual('Sincere@april.biz');

    })
    ));

    it("should return an error when I create user", inject([UsersService, MockBackend], fakeAsync((userService, mockBackend) => {
      //Arrange
      let dataResponse, dataError;
      let userMock = {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz"
      };
      let mockResponse = new ResponseOptions({ body: JSON.stringify(userMock) });
      mockBackend.connections.subscribe((connection) => {
        expect(connection.request.url).toBe('http://jsonplaceholder.typicode.com/users');
        connection.mockError(new Error('error'));
      });

      //Act
      let newUser = {
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz"
      }
      userService.createUser(newUser)
        .subscribe(
          response => { // success
            dataResponse = response;
          },
          error => { //error
            dataError = error;
          }
        );
      tick();

      //Assert
      expect(dataError).toBeDefined();
      expect(dataResponse).toBeUndefined();
    })));

  });

  describe('test for updateUser', () => {

    it("should return an user updated", inject([UsersService, MockBackend], fakeAsync((userService, mockBackend) => {

      //Arrange
      let dataResponse, dataError;
      let userMock = {
        "id": 12,
        "name": "Nicolas Molina",
        "username": "Bret",
        "email": "Sincere@april.biz"
      };
      let mockResponse = new ResponseOptions({ body: JSON.stringify(userMock) });
      mockBackend.connections.subscribe((connection) => {
        expect(connection.request.url).toBe('http://jsonplaceholder.typicode.com/users/12');
        connection.mockRespond(new Response(mockResponse));
      });

      //Act
      let user = {
        id: 12,
        name: "Nicolas Molina",
        username: "Bret",
        email: "Sincere@april.biz"
      }
      userService.updateUser(user)
        .subscribe(
          response => { // success
            dataResponse = response;
          },
          error => { //error
            dataError = error;
          }
        );
      tick();

      //Assert
      expect(dataError).toBeUndefined();
      expect(dataResponse.name).toEqual('Nicolas Molina');

    })));

    it("should return an error when I updated", inject([UsersService, MockBackend], fakeAsync((userService, mockBackend) => {

      //Arrange
      let dataResponse, dataError;
      let userMock = {
        "id": 12,
        "name": "Nicolas Molina",
        "username": "Bret",
        "email": "Sincere@april.biz"
      };
      let mockResponse = new ResponseOptions({ body: JSON.stringify(userMock) });
      mockBackend.connections.subscribe((connection) => {
        expect(connection.request.url).toBe('http://jsonplaceholder.typicode.com/users/12');
        connection.mockError(new Error('error'));
      });

      //Act
      let user = {
        id: 12,
        name: "Nicolas Molina",
        username: "Bret",
        email: "Sincere@april.biz"
      }
      userService.updateUser(user)
        .subscribe(
          response => { // success
            dataResponse = response;
          },
          error => { //error
            dataError = error;
          }
        );
      tick();

      //Assert
      expect(dataResponse).toBeUndefined();
      expect(dataError).toBeDefined();

    })));

  });

  describe('test for deleteUser',()=>{

    it("should return an object empty: {}", inject([UsersService, MockBackend], fakeAsync((userService, mockBackend)=>{
      //Arrange
      let dataResponse, dataError;
      let mockResponse = new ResponseOptions({body: "{}"});
      mockBackend.connections.subscribe((connection) => {
        expect(connection.request.url).toBe('http://jsonplaceholder.typicode.com/users/68');
        connection.mockRespond(new Response(mockResponse));
      });

      //Act
      userService.deleteUser(68)
      .subscribe(
        response => { // success
          dataResponse = response;
        },
        error => { //error
          dataError = error;
        }
      );
      tick();

      //Assert
      expect(dataResponse).toEqual({});
      expect(dataError).toBeUndefined();
    })))

    it("should return an error when I delete", inject([UsersService, MockBackend], fakeAsync((userService, mockBackend)=>{
      //Arrange
      let dataResponse, dataError, dataUrl;
      let mockResponse = new ResponseOptions({body: "{}"});
      mockBackend.connections.subscribe((connection) => {
        dataUrl = connection.request.url;
        connection.mockError(new Error('error'));
      });

      //Act
      userService.deleteUser(68)
      .subscribe(
        response => { // success
          dataResponse = response;
        },
        error => { //error
          dataError = error;
        }
      );
      tick();

      //Assert
      expect(dataResponse).toBeUndefined();
      expect(dataError).toBeDefined();
      expect(dataUrl).toEqual('http://jsonplaceholder.typicode.com/users/68');
    })))

  })

});
