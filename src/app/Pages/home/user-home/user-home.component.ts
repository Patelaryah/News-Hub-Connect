import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, RouterOutlet],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent {
  newsCards = [
    { imageUrl: 'assets/images/aaj-tak.png', alt: 'Aaj Tak', name: 'Aaj Tak', targetUrl: '/userhome' },
    { imageUrl: 'assets/images/abp-news.png', alt: 'ABP News', name: 'ABP News', targetUrl: '/userhome' },
    { imageUrl: 'assets/images/india-tv.png', alt: 'India TV', name: 'India TV', targetUrl: '/userhome' },
    { imageUrl: 'assets/images/ndtv-24x7.png', alt: 'NDTV27x7', name: 'NDTV 27x7', targetUrl: '/userhome' },
    { imageUrl: 'assets/images/sudarshan-news.png', alt: 'Surdarshan News', name: 'Surdarshan News', targetUrl: '/userhome' },
    { imageUrl: 'assets/images/zee-news.png', alt: 'Zee News', name: 'Zee News', targetUrl: '/userhome' }
    // Add more card objects as needed
  ];

  blogs = [
    { imageUrl: 'assets/images/coc.jpg', alt: 'COC', title: 'Title 1', description: 'Short description 1', targetUrl: '/userhome' },
    { imageUrl: 'assets/images/asphalt 9 legends.png', alt: 'Asphalt 9 Legends', title: 'Title 2', description: 'Short description 2', targetUrl: '/admin/userhome' },
    { imageUrl: 'assets/images/8 ball pool.jpg', alt: '8 Ball Pull', title: 'Title 3', description: 'Short description 3', targetUrl: '/admin/userhome' },
    // Add more blog objects as needed
  ];

  constructor(private router: Router) { }

  navigateToDestinationPage(cardName: string){
    this.router.navigate(['/userhome', cardName]);
     // Prevent default anchor behavior
  }

}
