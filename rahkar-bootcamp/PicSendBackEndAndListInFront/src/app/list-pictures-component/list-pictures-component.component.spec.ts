import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPicturesComponentComponent } from './list-pictures-component.component';

describe('ListPicturesComponentComponent', () => {
  let component: ListPicturesComponentComponent;
  let fixture: ComponentFixture<ListPicturesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPicturesComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListPicturesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
