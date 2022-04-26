import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'By Location', url: '/app/pages/locations', icon: 'location' },
    { title: 'By Company', url: '/app/pages/companies', icon: 'business' }
  ];
  constructor() {}
}
