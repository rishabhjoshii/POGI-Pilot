import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTeamComponent } from './dashboard-team.component';

describe('DashboardTeamComponent', () => {
  let component: DashboardTeamComponent;
  let fixture: ComponentFixture<DashboardTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
