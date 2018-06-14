import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocksCreateComponent } from './locks-create.component';

describe('LocksCreateComponent', () => {
  let component: LocksCreateComponent;
  let fixture: ComponentFixture<LocksCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocksCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocksCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
