import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUsersInformationComponent } from './show-users-information.component';

describe('ShowUsersInformationComponent', () => {
  let component: ShowUsersInformationComponent;
  let fixture: ComponentFixture<ShowUsersInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowUsersInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowUsersInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
