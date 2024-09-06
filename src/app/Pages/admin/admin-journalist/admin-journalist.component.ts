import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-journalist',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-journalist.component.html',
  styleUrl: './admin-journalist.component.css'
})
export class AdminJournalistComponent {
  newChannelName: string = '';
  channels: any[] = [{ name: 'Channel 1' }, { name: 'Channel 2' }, { name: 'Channel 3' }]; // Default channel names

  addChannel() {
    // Add new channel to the array or send request to backend to add channel
    this.channels.push({ name: this.newChannelName });
    // Clear input field
    this.newChannelName = '';
  }

  viewChannel(channel: any) {
    // Update channel logic
  }

  deleteChannel(channel: any) {
    // Delete channel logic
  }
}
