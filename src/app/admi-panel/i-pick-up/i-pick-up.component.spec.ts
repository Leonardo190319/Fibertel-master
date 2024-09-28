import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPickUpComponent } from './i-pick-up.component';

describe('IPickUpComponent', () => {
  let component: IPickUpComponent;
  let fixture: ComponentFixture<IPickUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IPickUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IPickUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
