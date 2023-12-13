import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomechaildComponent } from './homechaild.component';

describe('HomechaildComponent', () => {
  let component: HomechaildComponent;
  let fixture: ComponentFixture<HomechaildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomechaildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomechaildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
