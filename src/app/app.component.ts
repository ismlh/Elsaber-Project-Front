import { Component, HostListener, OnInit } from '@angular/core';
import { NavbarComponent } from './PresentationLayer/Components/SiteComponents/navbar/navbar.component';
import { DashboardComponent } from './PresentationLayer/Components/DashboardComponents/dashboard/dashboard.component';
import { Router, RouterOutlet } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { FooterComponent } from './PresentationLayer/Components/SiteComponents/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    RouterOutlet,
    DashboardComponent,
    NgxSpinnerModule,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  showScrollButton = false;
  private scrollThreshold = 350; // Show button after scrolling 300px
  IsDashboard: boolean = false;
  constructor(private router: Router, private _npxSpinner: NgxSpinnerService) {}
  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.IsDashboard = this.router.url.includes('Dashboard');
    });
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.scrollY > this.scrollThreshold;
  }

  // Scroll to top smoothly
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
