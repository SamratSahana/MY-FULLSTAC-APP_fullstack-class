import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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