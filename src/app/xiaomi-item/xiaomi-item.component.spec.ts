import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XiaomiItemComponent } from './xiaomi-item.component';

describe('XiaomiItemComponent', () => {
  let component: XiaomiItemComponent;
  let fixture: ComponentFixture<XiaomiItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XiaomiItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XiaomiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
