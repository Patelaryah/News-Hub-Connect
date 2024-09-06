import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  // Boolean variable to track whether the popup is open or not
  isPopupOpen: boolean = false;
  isImagePopupOpen: boolean = false;

  // images name
  images = [
    { src: 'image1.jpg', alt: 'Image 1' },
    { src: 'image2.jpg', alt: 'Image 2' }
    // Add more images here if needed
  ];
  selectedImage: string = '';

  // user type
  selectedRole: string = ''; // To store the selected role
  roles = [
    { id: 'user', name: 'User', iconClass: 'fas fa-user' },
    { id: 'journalist', name: 'Journalist', iconClass: 'fas fa-pen-nib' },
    { id: 'admin', name: 'Admin', iconClass: 'fas fa-user-tie' }
  ];
  // for otp auto redirect to next input
  digits = [1, 2, 3, 4, 5];
  otp = ['', '', '', '', ''];

  // label type
  inputFields = [
    [
      { type: 'text', placeholder: 'Username' },
      { type: 'text', placeholder: 'City' }
    ],
    [
      { type: 'email', placeholder: 'Email' },
      { type: 'password', placeholder: 'Password' }
    ],
    [
      { type: 'text', placeholder: 'Contact Number' },
      { type: 'password', placeholder: 'Confirm Password' }
    ]
  ];

  getSelectedImageAlt(): string {
    const selectedImg = this.images.find(img => img.src === this.selectedImage);
    return selectedImg ? selectedImg.alt : '';
  }
  
  submitImage() {
    // Handle image submission here, using this.selectedImage
    console.log('Selected image:', this.selectedImage);
    this.toggleImagePopup(); // Close the popup after submission if needed
  }

  // Function to toggle the popups open and close
  toggleImagePopup() {
    this.isImagePopupOpen = !this.isImagePopupOpen;
  }

  // Function to toggle the popup open and close
  togglePopup() {
    this.isPopupOpen = !this.isPopupOpen;
  }

  onInput(event: any, index: number) {
    const value = event.target.value;
    if (value.length === 1) {
      if (index < 4) {
        const nextInput = document.getElementById(`otp${index + 2}`) as HTMLInputElement;
        nextInput.focus();
      } 
      if (index === 5) {
        event.target.blur(); // Blur the last input field
        this.verify(); // Call the verification method
      }
    }
  }  

  verify() {
    // Retrieve the OTP code from the input fields
    const otpInputs = [];
    for (let i = 1; i <= 5; i++) {
      const input = (document.querySelector(`#otp${i}`) as HTMLInputElement);
      otpInputs.push(input.value);
    }
  
    // Convert the OTP code array to a single string
    const otpCode = otpInputs.join('');
  
    // Implement your verification logic here
    // For demonstration purposes, let's log the OTP code
    console.log('Verifying OTP:', otpCode);
  
    // Here you can implement your actual verification logic, such as sending the OTP code to a server for validation
  }
}
