import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoneyToWalletComponent } from './add-money-to-wallet.component';

describe('AddMoneyToWalletComponent', () => {
  let component: AddMoneyToWalletComponent;
  let fixture: ComponentFixture<AddMoneyToWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMoneyToWalletComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMoneyToWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
