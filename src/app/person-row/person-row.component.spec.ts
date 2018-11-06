import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';  // Para informe de selectores, llegar a la propiedad  html y verificar si se está renderizando o no una variable de ese componente
import { DebugElement } from '@angular/core';// Entrar a mirar el elemento como tal en html

import { PersonRowComponent } from './person-row.component';

import { Person } from './../person';

describe("UserRowComponent", () => {

  // Creación de instancias que se usaran por casi todo el flujo de la aplicación 
  let component: PersonRowComponent; // Componente como tal
  let fixture: ComponentFixture<PersonRowComponent>; // Contexto para el componente
  let de: DebugElement;
  let el: HTMLElement;

  //Arrange
  beforeEach(async(() => {// Se agrega async para probar que la generación del componente sea asíncrona
    TestBed.configureTestingModule({
      declarations: [PersonRowComponent], // declare the test component
    })
    .compileComponents(); // Para asegurar que los css, sass y htmls compilen
    
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonRowComponent);
    component = fixture.componentInstance;

    component.person = new Person(
      'nicolas',
      'molina',
      23,
      60,
      1.70
    );

    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('h1')); // Obtener elemento css con by , elemento para debugger
    el = de.nativeElement;
    // Se parte en dos before each, porque quiero esta generacion de variables s+incrona
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  })

  it('name should be "nicolas"', () => {
    expect(component.person.name).toEqual('nicolas');
  });

  it('age should be "23"', () => {
    expect(component.person.age).toEqual(23);
  });

  it('Name "nicolas" should be in template', () => {
    fixture.detectChanges(); // Para que refresque y renderice el html, como el tick(), forzar a que refresque el elemento
    expect(el.textContent).toEqual('nicolas');
  })

  it('Name "nicolas" should be "otro nombre"  in template when name changes', () => {
    component.person.name = 'otro nombre'; 
    fixture.detectChanges(); // Para que refresque y renderice el html, como el tick(), forzar a que refresque el elemento
    expect(el.textContent).toEqual('otro nombre');
  })

  it('age should be "23"  in template', () => {
    let de = fixture.debugElement.query(By.css('.person-age')); // Obtener elemento css con by , elemento para debugger
    let el = de.nativeElement;

    // component.name = 'otro nombre'; 

    fixture.detectChanges(); // Para que refresque y renderice el html, como el tick(), forzar a que refresque el elemento
    expect(el.textContent).toEqual('Su edad es: 23');
  })

  it('age should be "24"  in template when I change', () => {
    let de = fixture.debugElement.query(By.css('.person-age')); // Obtener elemento css con by , elemento para debugger
    let el = de.nativeElement;

    component.person.age = 24; 

    fixture.detectChanges(); // Para que refresque y renderice el html, como el tick(), forzar a que refresque el elemento
    expect(el.textContent).toEqual('Su edad es: 24');
  })

});

/* import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonRowComponent } from './person-row.component';

describe('PersonRowComponent', () => {
  let component: PersonRowComponent;
  let fixture: ComponentFixture<PersonRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); */
