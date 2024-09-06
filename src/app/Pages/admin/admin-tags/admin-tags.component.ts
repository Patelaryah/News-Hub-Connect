import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-tags',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-tags.component.html',
  styleUrl: './admin-tags.component.css'
})
export class AdminTagsComponent {
  showInput: boolean = false;
  newChannelName: string = '';
  newkeywordName: string = '';
  channels: any[] = [{ name: 'Channel-1', keyword: 'a,b,c'}, { name: 'Channel-2', keyword: 'A,B,C' }, { name: 'Channel-3', keyword: 'A,b,C' }]; // Default channel names

  toggleInput() {
    this.showInput = !this.showInput;
  }

  addChannel() {
    // Add new channel to the array or send request to backend to add channel
    this.channels.push({ name: this.newChannelName, keyword: this.newkeywordName });
    // Clear input field
    this.newChannelName = '';
    this.newkeywordName = '';
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
