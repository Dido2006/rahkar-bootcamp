import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransationListComponent } from './transation-list.component';

describe('TransationListComponent', () => {
  let component: TransationListComponent;
  let fixture: ComponentFixture<TransationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransationListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
