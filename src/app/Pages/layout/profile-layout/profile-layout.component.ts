import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ProfilePopupService } from '../../../services/profile-popup.service';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-profile-layout',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatDialogModule, CommonModule],
  templateUrl: './profile-layout.component.html',
  styleUrl: './profile-layout.component.css'
})
export class ProfileLayoutComponent {
  // this.data: {
  //   name: 'Rajesh Panchal';
  //   email: 'abcxyz23@yahoo.com';
  //   location: 'Ahmedabad';
  //   image_path: "assets/images/asphalt 9 legends.png"
  // };

  // // data: any[] = [
  // //   { 
  // //     email: 1, 
  // //     name: 'Person 1', 
  // //     image_path: 'assets/images/8 ball pool.jpg' ,
  // //     location: 'Ahmedabad'
  // //   }
  // //   // Add more journalist data as needed
  // // ];

  // isPopupOpen$ = this.popupService.isPopupOpen;

  // constructor(private popupService: ProfilePopupService) {}

  // closePopup() {
  //   this.popupService.closePopup();
  // }

  isPopupOpen$ = this.popupService.isPopupOpen;

  data!: {
    name: string;
    email: string;
    location: string;
    image_path: string;
  };

  constructor(private popupService: ProfilePopupService) {
    this.initializeData();
  }

  initializeData() {
    this.data = {
      name: 'Rajesh Panchal',
      email: 'abcxyz23@yahoo.com',
      location: 'Ahmedabad',
      image_path: 'assets/images/asphalt 9 legends.png'
    };
  }

  closePopup() {
       this.popupService.closePopup();
     }
}
