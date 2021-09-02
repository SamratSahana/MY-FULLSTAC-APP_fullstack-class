import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent{

  title = 'MY-FULSTACK-APP';

  persons = [
    {
      id: 1,
      name: 'Tom',
      email: 'tom@gmail.com',
      age: 45
    },
    {
      id: 2,
      name: 'Jon',
      email: 'jon@gmail.com',
      age: 54
    },
    {
      id: 2,
      name: 'Sham',
      email: 'sham@gmail.com',
      age: 89
    },
  ]
}


