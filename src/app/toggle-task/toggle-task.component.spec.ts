import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ToggleTaskComponent} from './toggle-task.component';

describe('ToggleTaskComponent', () => {
  let component: ToggleTaskComponent;
  let fixture: ComponentFixture<ToggleTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleTaskComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
