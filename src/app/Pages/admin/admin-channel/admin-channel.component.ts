import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-channel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-channel.component.html',
  styleUrl: './admin-channel.component.css'
})
export class AdminChannelComponent {
  showInput: boolean = false;
  newChannelName: string = '';
  channels: any[] = [{ name: 'Channel 1' }, { name: 'Channel 2' }, { name: 'Channel 3' }]; // Default channel names

  toggleInput() {
    this.showInput = !this.showInput;
  }

  addChannel() {
    // Add new channel to the array or send request to backend to add channel
    this.channels.push({ name: this.newChannelName });
    // Clear input field
    this.newChannelName = '';
    // Hide input field and show the '+' button again
    this.showInput = false;
  }

  updateChannel(channel: any) {
    // Update channel logic
  }

  deleteChannel(channel: any) {
    // Delete channel logic
  }
}
