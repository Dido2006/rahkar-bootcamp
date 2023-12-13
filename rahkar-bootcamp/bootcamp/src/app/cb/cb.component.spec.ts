import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbComponent } from './cb.component';

describe('CbComponent', () => {
  let component: CbComponent;
  let fixture: ComponentFixture<CbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
