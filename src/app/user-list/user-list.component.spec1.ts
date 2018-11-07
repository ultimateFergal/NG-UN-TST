import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';  // Para informe de selectores, llegar a la propiedad  html y verificar si se está renderizando o no una variable de ese componente
import { DebugElement } from '@angular/core';// Entrar a mirar el elemento como tal en html

import { UsersService } from '../users.service'; 
import { MockUsersService } from '../users.service.mock'; 

import { UserListComponent } from './user-list.component';
import { UserRowComponent } from '../user-row/user-row.component';
import { HttpModule } from '@angular/http';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent, UserRowComponent],
      //providers: [UsersService]
      // imports: [HttpModule],
      providers: [{ provide: UsersService, useClass: MockUsersService}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log(component.users);
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component.users.length).toEqual(3);
  });

  it('SelectedUser should be first item in the array', () => {
    expect(component.selectedUser.name).toEqual('valentina');
  })

  it('should have a app-user-row', () => {
    let de = fixture.debugElement.query(By.css('app-user-row'));
    expect(de).toBeTruthy();
  });

  it('should raise selected event when clicked', () => {
    let button = fixture.debugElement.query(By.css('app-user-row .btn-selected'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    // selected hero should be the same  data bound hero
    // expect(component.selectedUser.name).toBe('valentina');
    expect(component.selectedUser.name).toEqual('valentina');
  })
  
});
