import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPictureComponentComponent } from './get-picture-component.component';

describe('GetPictureComponentComponent', () => {
  let component: GetPictureComponentComponent;
  let fixture: ComponentFixture<GetPictureComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetPictureComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetPictureComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
