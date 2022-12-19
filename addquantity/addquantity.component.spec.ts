import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddquantityComponent } from './addquantity.component';

describe('AddquantityComponent', () => {
  let component: AddquantityComponent;
  let fixture: ComponentFixture<AddquantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddquantityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddquantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
