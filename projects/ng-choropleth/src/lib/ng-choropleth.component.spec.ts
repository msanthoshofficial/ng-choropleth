import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgChoroplethComponent } from './ng-choropleth.component';

describe('NgChoroplethComponent', () => {
  let component: NgChoroplethComponent;
  let fixture: ComponentFixture<NgChoroplethComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgChoroplethComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgChoroplethComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
