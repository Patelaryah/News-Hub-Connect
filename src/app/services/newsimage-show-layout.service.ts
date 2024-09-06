import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsimageShowLayoutService {
  private selectedButtonSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  setSelectedButton(buttonName: string): void {
    this.selectedButtonSubject.next(buttonName);
  }

  getSelectedButton(): Observable<string> {
    return this.selectedButtonSubject.asObservable();
  }
}
