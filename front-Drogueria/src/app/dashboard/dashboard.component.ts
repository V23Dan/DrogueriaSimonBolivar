import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import NavbarComponent from '../shared/navbar/navbar.component';
import SidebarComponent from '../shared/sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, NavbarComponent, SidebarComponent],
  templateUrl: './dashboard.component.html',
  styles: ``,
})
export default class DashboardComponent {}
