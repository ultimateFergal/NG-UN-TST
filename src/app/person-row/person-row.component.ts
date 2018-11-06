import { Component, OnInit, Input } from '@angular/core';

import { Person } from '../person';

@Component({
  selector: 'app-person-row',
  templateUrl: './person-row.component.html',
  // template:`<h1>{{name}}</h1>`,
  styleUrls: ['./person-row.component.css']
})
export class PersonRowComponent implements OnInit {

  @Input() person: Person;
  name: string = 'nicolas';
  age: number = 23;

  constructor() {     }

  ngOnInit() {
    
    console.log(this.person);
  }

}
