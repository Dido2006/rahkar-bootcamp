import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUserInformationComponent } from './get-user-information.component';

describe('GetUserInformationComponent', () => {
  let component: GetUserInformationComponent;
  let fixture: ComponentFixture<GetUserInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetUserInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetUserInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
