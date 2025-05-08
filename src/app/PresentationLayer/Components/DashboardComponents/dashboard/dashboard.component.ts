import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ILoginRes } from '../../../../BL/Models/ilogin';
import { jwtDecode, JwtPayload } from 'jwt-decode';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  // In your component
  isSidebarCollapsed = false;

  toggleSidebar(): void {
    if (this.viewportWidth > 750) {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
    }
  }

  viewportWidth: number = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.viewportWidth = window.innerWidth;
    if (this.viewportWidth < 750) this.isSidebarCollapsed = true;
  }

  ngOnInit() {
    this.viewportWidth = window.innerWidth;
    if (this.viewportWidth < 750) this.isSidebarCollapsed = true;
  }
}
