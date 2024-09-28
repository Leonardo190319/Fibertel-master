import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiPanelComponent } from './admi-panel.component';

describe('AdmiPanelComponent', () => {
  let component: AdmiPanelComponent;
  let fixture: ComponentFixture<AdmiPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmiPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmiPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
