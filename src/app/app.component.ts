import { Component } from '@angular/core';

@Component({
  selector: 'mi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // template: `
  //   <nav class="navbar navbar-expand-sm bg-light navbar-light p-2">
  //     <div class="container mt-3 justify-content-center">
  //       <a
  //         class="navbar-brand"
  //         style="font-family: cursive; font-size: 2.5rem; font-style: italic"
  //         href="#"
  //         >Welcome to {{ title }}</a
  //       >
  //       <div class="collapse navbar-collapse" id="collapsibleNavbar">
  //         <ul class="navbar-nav ms-auto text-center navclass">
  //           <li class="nav-item px-2 py-0">
  //             <a class="nav-link" [routerLink]="['/photos']">Home</a>
  //           </li>
  //           <li class="nav-item px-2 py-0">
  //             <a class="nav-link" [routerLink]="['/newPhoto']">Add Photo</a>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   </nav>
  //   <div class="container">
  //     <router-outlet></router-outlet>
  //   </div>
  //   <ng-confirm></ng-confirm>
  // `,
})
export class AppComponent {
  title = 'MicroInstagramApp';
}
