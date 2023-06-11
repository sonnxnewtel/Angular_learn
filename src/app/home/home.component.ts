import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  employees = [
    {
      key: 'Lifecycle',
      items: [
        { name: 'ngOnchange', routerLink: '/lifecycle/ngOnchange' },
        { name: 'ngOnInit', routerLink: '/lifecycle/ngOnInit' },
        { name: 'ngDoCheck', routerLink: '/lifecycle/ngDoCheck' },
        { name: 'ngOnDestroy', routerLink: '/lifecycle/ngOndestroy' }
      ]
    }
  ];  
}
