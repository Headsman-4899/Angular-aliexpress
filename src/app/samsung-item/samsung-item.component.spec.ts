import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamsungItemComponent } from './samsung-item.component';

describe('SamsungItemComponent', () => {
  let component: SamsungItemComponent;
  let fixture: ComponentFixture<SamsungItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamsungItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamsungItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
