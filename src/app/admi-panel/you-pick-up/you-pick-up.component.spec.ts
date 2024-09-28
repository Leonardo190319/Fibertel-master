import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouPickUpComponent } from './you-pick-up.component';

describe('YouPickUpComponent', () => {
  let component: YouPickUpComponent;
  let fixture: ComponentFixture<YouPickUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YouPickUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YouPickUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
