import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IphoneItemComponent } from './iphone-item.component';

describe('IphoneItemComponent', () => {
  let component: IphoneItemComponent;
  let fixture: ComponentFixture<IphoneItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IphoneItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IphoneItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
