import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // Boolean variable to track whether the popup is open or not
  isPopupOpen: boolean = false;

  // user type
  selectedRole: string = ''; // To store the selected role
  roles = [
    { id: 'user', name: 'User', iconClass: 'fas fa-user' },
    { id: 'journalist', name: 'Journalist', iconClass: 'fas fa-pen-nib' },
    { id: 'admin', name: 'Admin', iconClass: 'fas fa-user-tie' }
  ];

  // label type
  inputFields = [
      { type: 'email', placeholder: 'Email' },
      { type: 'password', placeholder: 'Confirm Password' }
  ];
  
  // Function to toggle the popup open and close
  togglePopup() {
    this.isPopupOpen = !this.isPopupOpen;
  }
}
