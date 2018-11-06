import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';  // Para informe de selectores, llegar a la propiedad  html y verificar si se está renderizando o no una variable de ese componente
import { DebugElement } from '@angular/core';// Entrar a mirar el elemento como tal en html

import { UserRowComponent } from './user-row.component';
import { User } from '../user';

describe('UserRowComponent', () => {
  let component: UserRowComponent;
  let fixture: ComponentFixture<UserRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserRowComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRowComponent);
    component = fixture.componentInstance;
    component.user = new User('nicolas', 'nicolas@a.co', 'sdfgsdg');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('name should be "nicolas"', () => {
    expect(component.user.name).toEqual('nicolas');
  });

  it('name should be "nicolas" in template', () => {
    // Arrange
    let de = fixture.debugElement.query(By.css('h5'));
    let el = de.nativeElement;

    // Assert
    expect(el.textContent).toEqual('nicolas');
  });

  it('name should be "andrea" I change model in template', () => {
    // Arrange
    let de = fixture.debugElement.query(By.css('h5'));
    let el = de.nativeElement;

    component.user.name = 'andrea';
    fixture.detectChanges();

    // Assert
    expect(component.user.name).toEqual('andrea');
    expect(el.textContent).toEqual('andrea');
  });

  it('should show email when button clicked', () => {
    // Arrange
    let button = fixture.debugElement.query(By.css('.btn-show-email'));
    let de = fixture.debugElement.query(By.css('.user-email'));
    let el = de.nativeElement;
    button.triggerEventHandler('click', null);

    fixture.detectChanges();

    // Assert
    expect(el.textContent).toEqual('nicolas@a.co');
  });

  it('should raise selected event when clicked', () => {
    // Arrange
    let selectedUser: User;
    component.onSelected.subscribe((user: User) => {
      selectedUser = user;
    });
    let button = fixture.debugElement.query(By.css('.btn-selected'));
    button.triggerEventHandler('click', null);

    fixture.detectChanges();

    expect(selectedUser.name).toEqual('nicolas');
  })


});
