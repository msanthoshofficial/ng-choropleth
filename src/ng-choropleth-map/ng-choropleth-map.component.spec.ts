import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgChoroplethMapComponent } from './ng-choropleth-map.component';

describe('NgChoroplethMapComponent', () => {
  let component: NgChoroplethMapComponent;
  let fixture: ComponentFixture<NgChoroplethMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgChoroplethMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgChoroplethMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
