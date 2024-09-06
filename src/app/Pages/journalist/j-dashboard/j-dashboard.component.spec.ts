import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JDashboardComponent } from './j-dashboard.component';

describe('JDashboardComponent', () => {
  let component: JDashboardComponent;
  let fixture: ComponentFixture<JDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
