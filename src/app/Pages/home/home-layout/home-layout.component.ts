import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserHomeComponent } from '../user-home/user-home.component';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [FormsModule, CommonModule, UserHomeComponent],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css'
})
export class HomeLayoutComponent {
  preferredJournalists: any[] = [
    { id: 1, name: 'Person 1', image: 'assets/images/8 ball pool.jpg' },
    { id: 2, name: 'Person 2', image: 'assets/images/5a9c42e379e7e6e3ba50e96e027b8d85.jpg' },
    { id: 3, name: 'Person 3', image: 'assets/images/20210518_230148.png' },
    { id: 4, name: 'Person 4', image: 'assets/images/asphalt 9 legends.png' },
    { id: 5, name: 'Person 5', image: 'assets/images/coc.jpg' },
    // Add more journalist data as needed
  ];

  otherJournalists: any[] = [
    { id: 1, name: 'Person 1', image: 'assets/images/8 ball pool.jpg' },
    { id: 2, name: 'Person 2', image: 'assets/images/5a9c42e379e7e6e3ba50e96e027b8d85.jpg' },
    { id: 3, name: 'Person 3', image: 'assets/images/20210518_230148.png' },
    { id: 4, name: 'Person 4', image: 'assets/images/asphalt 9 legends.png' },
    { id: 5, name: 'Person 5', image: 'assets/images/coc.jpg' },
    // Add more journalist data as needed
  ];
}
