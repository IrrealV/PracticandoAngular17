import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheCatAPIComponent } from './the-cat-api.component';

describe('TheCatAPIComponent', () => {
  let component: TheCatAPIComponent;
  let fixture: ComponentFixture<TheCatAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheCatAPIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheCatAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
