import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayGroundComponent } from './play-ground.component';

describe('PlayGroundComponent', () => {
  let component: PlayGroundComponent;
  let fixture: ComponentFixture<PlayGroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayGroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayGroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
