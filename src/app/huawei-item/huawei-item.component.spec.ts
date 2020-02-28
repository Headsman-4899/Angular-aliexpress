import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuaweiItemComponent } from './huawei-item.component';

describe('HuaweiItemComponent', () => {
  let component: HuaweiItemComponent;
  let fixture: ComponentFixture<HuaweiItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuaweiItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuaweiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
