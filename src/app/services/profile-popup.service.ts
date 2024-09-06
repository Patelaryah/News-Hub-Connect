import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProfilePopupService {
  
  private popupState = new BehaviorSubject<boolean>(false);
  isPopupOpen = this.popupState.asObservable();

  openPopup() {
    this.popupState.next(true);
  }

  closePopup() {
    this.popupState.next(false);
  }
}
