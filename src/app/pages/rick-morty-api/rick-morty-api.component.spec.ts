import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickMortyAPIComponent } from './rick-morty-api.component';

describe('RickMortyAPIComponent', () => {
  let component: RickMortyAPIComponent;
  let fixture: ComponentFixture<RickMortyAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RickMortyAPIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RickMortyAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
