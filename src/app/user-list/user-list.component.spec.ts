import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';  // Para informe de selectores, llegar a la propiedad  html y verificar si se está renderizando o no una variable de ese componente
import { DebugElement } from '@angular/core';// Entrar a mirar el elemento como tal en html
import { HttpModule } from '@angular/http';

import { UsersService } from '../users.service';
import { MockUsersService } from '../users.service.mock';

import { Observable } from 'rxjs/';
import { of } from 'rxjs';

import { User } from './../user';

import { UserListComponent } from './user-list.component';
import { UserRowComponent } from '../user-row/user-row.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let usersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent, UserRowComponent],
      //providers: [UsersService]
      imports: [HttpModule],
      providers: [{ provide: UsersService, useClass: MockUsersService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    usersService = fixture.debugElement.injector.get(UsersService);
    // fixture.detectChanges();
  });

  it('should create', () => {
    // Act
    fixture.detectChanges();
    // Assert
    expect(component).toBeTruthy();
  });


  it('Should call getAllUsers', () => {
    // Arrange
    let mockUsers = of([
      new User('valentina', 'asas@as.co', 'asas'),
      new User('nicolas', 'nicolas@asas.co', 'asas'),
      new User('zulema', 'zule@zule.co', 'asas')
    ]);
    spyOn(usersService, 'getAllUsers').and.returnValue(mockUsers);
    // Act
    fixture.detectChanges();
    // Assert
    expect(component.users.length).toEqual(3);
    expect(usersService.getAllUsers).toHaveBeenCalled();
    // expect(usersService.getAllUsers).toHaveBeenCalledTimes(1); // cuantas veces
    // expect(usersService.getAllUsers).toHaveBeenCalledWith(1); // Con qué métodos o qué variables
  })


  describe("test for getUser", () => {

    it('User[0] should be a user', () => {
      fixture.detectChanges();
      // Arrange
      let mockUser = of(
        new User('karina', 'asas@as.co', 'asas')
      );
      spyOn(usersService, 'getUser').and.returnValue(mockUser);
      // Act
      component.getUser(1223);
      // Assert
      expect(component.users[0].name).toEqual('karina');
      //expect(usersService.getUser).toHaveBeenCalled();
    })

    it('should call getUser method with 1 parameter', () => {
      fixture.detectChanges();
      // Arrange
      let mockUser = of(
        new User('karina', 'asas@as.co', 'asas')
      );
      spyOn(usersService, 'getUser').and.returnValue(mockUser);
      // Act
      component.getUser(1223);
      // Assert
      //expect(component.users[0].name).toEqual('karina');
      expect(usersService.getUser).toHaveBeenCalled();
      expect(usersService.getUser).toHaveBeenCalledWith(1223);
    })
  })

})

