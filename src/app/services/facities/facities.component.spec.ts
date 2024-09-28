import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacitiesComponent } from './facities.component';

describe('FacitiesComponent', () => {
  let component: FacitiesComponent;
  let fixture: ComponentFixture<FacitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
