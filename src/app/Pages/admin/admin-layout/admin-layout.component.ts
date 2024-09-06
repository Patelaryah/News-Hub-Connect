import { RouterModule, RouterOutlet, NavigationEnd, Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
import { ProfilePopupService } from '../../../services/profile-popup.service';
import { ProfileLayoutComponent } from '../../layout/profile-layout/profile-layout.component';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, ProfileLayoutComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
 
export class AdminLayoutComponent implements OnInit{

  @Output() toggleCard = new EventEmitter<void>();


  showSidebar: boolean = false;
  cardName: string = '';
  imageUrl: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private popupService: ProfilePopupService) { }

  openPopup() {
    this.popupService.openPopup();
  }

  ngOnInit(): void {
    this.checkRoute(this.router.url);

    // Subscribe to router events to detect route changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkRoute(event.urlAfterRedirects);
      }
    });

    // Subscribe to router events to get route parameters
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateCardName();
    });

    // Initial call to get the parameter when the component is first loaded
    this.updateCardName();
  }

  updateCardName(): void {
    // Retrieve the parameter from the child route
    const childRoute = this.route.firstChild;
    if (childRoute) {
      childRoute.paramMap.subscribe(params => {
        this.cardName = params.get('cardName') ?? '';
        this.imageUrl = this.getImagePath(this.cardName);
      });
    }
  }

  getImagePath(cardName: string): string {
    let imagePath = '';
    switch (cardName) {
      case 'Aaj Tak':
        imagePath = 'assets/images/aaj-tak.png';
        break;
      case 'ABP News':
        imagePath = 'assets/images/abp-news.png';
        break;
      case 'India TV':
        imagePath = 'assets/images/india-tv.png';
        break;
      case 'NDTV 27x7':
        imagePath = 'assets/images/ndtv-24x7.png';
        break;
      case 'Surdarshan News':
        imagePath = 'assets/images/sudarshan-news.png';
        break;
      case 'Zee News':
        imagePath = 'assets/images/zee-news.png';
        break;
        // Add cases for other buttons
      default:
        imagePath = '';
        
        // Default image path
        break;
    }
    return imagePath;
  }

  checkRoute(url: string): void {
    this.showSidebar = url.includes('/admin/');
  }

}
