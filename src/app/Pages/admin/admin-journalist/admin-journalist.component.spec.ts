import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJournalistComponent } from './admin-journalist.component';

describe('AdminJournalistComponent', () => {
  let component: AdminJournalistComponent;
  let fixture: ComponentFixture<AdminJournalistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminJournalistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminJournalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
